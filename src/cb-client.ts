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
    name: "app",
    actions: [
      {
        name: "create_item",
        method: "post",
        endpointFn: (params) => {
          return `/foodbees/create_item`
        }
      },
      {
        name: "enable",
        method: "post",
        endpointFn: (params) => `/site_preferences/feature/${params.featureId}/enable`
      },
      {
        name: "get_options",
        method: "get",
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

app: any;

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