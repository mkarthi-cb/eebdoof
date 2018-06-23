import axios, {AxiosInstance} from 'axios'

var getCSRFToken = () => {
  let metaTag = <HTMLMetaElement>document.getElementsByName("csrf-token")[0];
  return metaTag && metaTag.content;
}

var urlEncodeData = (data) => {
  var str = [];
  for (var p in data) {
      if (data.hasOwnProperty(p) && (!(data[p] == undefined || data[p] == null))) {
        if(data[p] instanceof Array){
          let _param = data[p];
          _param.forEach(_p => {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(_p));
          });
        }else{
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        }
      }
  }
  return str.join("&");
}

export default class RestClient {
  axios: AxiosInstance;
  constructor(){
    this.axios = axios.create({
      transformRequest: [(data) => {
        return urlEncodeData(data);
      }]
    });
    this.axios.defaults.paramsSerializer = params => {
      return urlEncodeData(params);
    }
  }

  get(args) {
    return this.axios.request(this._get.apply(this, arguments));
  }

  post(args) {
    return this.axios.request(this._post.apply(this, arguments));
  }

  _get(path, params, headers = {}) {
    var config = {
      method: "get",
      params: params,
      url: path,
      headers: Object.assign({
        'Content-Type': 'application/x-www-form-urlencoded',
        "X-Requested-With": "XMLHttpRequest"
      }, headers)
    }

    return config;
  }

  _post(path, data, headers = {}) {
    var config = {
      method: "post",
      data: Object.assign(data, {_csrf_token: getCSRFToken()}),
      url: path,
      headers: Object.assign({
        'Content-Type': 'application/x-www-form-urlencoded',
        "X-Requested-With": "XMLHttpRequest"
      }, headers)
    }

    return config;
  }
}