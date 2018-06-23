import { Error } from "@/store/types/common";
export default class CbError {
  _source : any;
  exceptionType: string;
  paramMessage: string;
  paramName: string;
  message: string;
  
  constructor(status, response) {
    let tmp = this.checkForWebParamException(response);
    this._source = tmp ? tmp : response ;
    this.exceptionType = this._source.param ? "cb_param" : "cb"
    this.fillValues();
  }

  checkForWebParamException(response) {
    if(response.errors && response.errors[1] && response.errors[1].param) {
      return {
        "param": response.errors[1].param,
        "error_msg": response.errors[1].message
      }
    }
  }

  fillValues() {
    if(this.isParamException()) {
      this.fillParamException();
    }
    else{
      this.showCbPageError();
    }
  }

  fillParamException() {
    this.paramMessage = this._source.error_msg;
    this.paramName = this._source.error_param || this._source.param;
    this.message = "There were errors while submitting";
  }

  showCbPageError() {
    var errorJSON = this._source;
    errorJSON && errorJSON.errors && errorJSON.errors.forEach((errObj) => {
      if (!errObj.hasOwnProperty("param")) {
          window['flashMessage'].show(window['flashMessage'].getAsFlash("error", errObj.message));
        }
    })
  }

  isParamException() {
    return this.exceptionType == "cb_param";
  }

}