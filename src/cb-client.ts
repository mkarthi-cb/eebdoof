import axios from 'axios'
import RestClient from "@/utils/rest-client"
import CbError from "@/utils/cb-error"
import Vue from 'vue'

var getEndpoint = function(action, params) {
  if(action.endpoint) {
    return action.endpoint;
  }
  if(action.endpointFn) {
    var sanitizedParams = Object.keys(params).reduce((o, param) => {
      if(params[param]) {
        o[param] = encodeURIComponent(params[param]);
      }
      return o;
    }, {});
    return action.endpointFn(sanitizedParams);
  }
}

var constructQueryParams = function(allowed, params) {
  return allowed.reduce((o, p) => {
    if(params[p]) {
      o += `${p}=${params[p]}&`;
    }
    return o;
  }, "");
}

const apis = [
  {
    name: "features",
    actions: [
      {
        name: "load",
        method: "get",
        endpointFn: (params) => `/site_preferences/${params.featureId}/ui_config`
      },
      {
        name: "enable",
        method: "post",
        endpointFn: (params) => `/site_preferences/feature/${params.featureId}/enable`
      },
      {
        name: "disable",
        method: "post",
        endpointFn: (params) => `/site_preferences/feature/${params.featureId}/disable`
      },
      {
        name: "update_rule",
        method: "post",
        endpointFn: (params) => `/site_preferences/${params.ruleName}/update_rule`
      },
      {
        name: "add_rule",
        method: "post",
        endpointFn: (params) => {
          return `/site_preferences/${params.ruleName}/add_rule`;
        }
      },
      {
        name: "override_rule",
        method: "post",
        endpointFn: (params) => {
          return `/site_preferences/${params.ruleName}/override_rule`;
        }
      },
      {
        name: "get_options",
        method: "get",
        endpointFn: (params) => {
          let url = decodeURIComponent(params.url);
          return `${url}`
        }
      },
      {
        name:'toggle_text_editor',
        method: "post",
        endpointFn: (params) =>{
          return `/site_preferences/edit_text`;
        }
      },
      {
        name:'update_prefex_text',
        method: 'post',
        endpointFn:(params) => {
          return `site_preferences/prefex_text_update`;
        }
      },
      {
        name: 'update_namespace_text',
        method: 'post',
        endpointFn:(params) =>{
          return `/site_preferences/namespace_text_update`;
        }
      }
    ]
  },
  {
    name: "criteria",
    actions: [
      {
        name: "load",
        method: "get",
        endpointFn: (params) => {
          return `/site_preferences/${params.ruleName}/get_criteria_ui`
        }
      },
      {
        name: "add",
        method: "post",
        endpointFn: (params) => {
          return `/site_preferences/${params.ruleName}/add_criteria`
        }
      },
      {
        name: "update",
        method: "post",
        endpointFn: (params) => {
          return `/site_preferences/${params.ruleName}/update_criteria`
        }
      },
      {
        name: "delete",
        method: "post",
        endpointFn: (params) => {
          return `/site_preferences/criteria/${params.ruleName}/delete`
        }
      }
    ]
  },
  {
    name: "override",
    actions: [
      {
        name: "load",
        method: "get",
        endpointFn: (params) => {
          let url = decodeURIComponent(params.url);
            return `${url}`
        }
      },
      {
        name: "update",
        method: "post",
        endpointFn: (params) => {
          let url = decodeURIComponent(params.url);
          return `${url}`
        }
      }
    ]
  },
  {
    name: "decision",
    actions: [
      {
        name: "load",
        method: "get",
        endpointFn: (params) => {
          let url = decodeURIComponent(params.url);
          return `${url}`
        }
      },
      {
        name: "update",
        method: "post",
        endpointFn: (params) => {
          let url = decodeURIComponent(params.url);
          return `${url}`
        }
      }
    ]
  }
]

class CbClient {
  restClient: RestClient;

  features: any;
  criteria: any;
  override: any;
  decision: any;

  requestCounter: number = 0;

  requests: {} = {};

  constructor() {
    this.restClient = new RestClient();
    var that = this;
    apis.forEach(api => {
      this[api.name] = { };
      api.actions.forEach(action => {
        this[api.name][action.name] = function(args) {
          var urlEndPoint = getEndpoint(action, Array.prototype.shift.apply(arguments));
          var finalArgs = [].slice.call(arguments);
          finalArgs.unshift(urlEndPoint);
          if(finalArgs.length == 1) {
            finalArgs.push({});
          }

          var headers = {};
          finalArgs.push(headers);

          return new Promise((resolve, reject) => {
            if(action.method == "post") {
              that.requestCounter += 1;
              Vue.set(that.requests, "" + that.requestCounter, true);
              var requestId = that.requestCounter;
            }
            that.restClient[action.method].apply(that.restClient, finalArgs)
            .then(response => {
              resolve(response.data);
              if(window['updateLoadTime']){
                window['updateLoadTime']();
              }
              if(requestId) {
                Vue.delete(that.requests, "" + requestId);
              }
            })
            .catch((error) => {
              let cbError = new CbError(error.response.status, error.response.data);
              reject(cbError);
              if(requestId) {
                Vue.delete(that.requests, "" + requestId);
              }
            });
          });
        }
      })
    })
  }
}

export default new CbClient();