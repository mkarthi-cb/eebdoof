var CbUtils = {}
var replaceWithPlaceholders = function(output, placeholders) {
  if(output && placeholders) {
    Object.keys(placeholders).forEach((key) => {
      output = output.replace(`%\{${key}\}`, placeholders[key]);
    });
  }
  return output;
}
CbUtils.converObjectToString = function(obj){
  if(obj instanceof Array){
    var _array = [];
    var i =0;
    for(var val in obj){
        _array[i++] = CbUtils.converObjectToString(obj[val]);
    }
    i=0;
    return _array;
  }else if(obj instanceof Object){
    var _object={};
    for (var key in obj) {
      _object[key] = CbUtils.converObjectToString(obj[key]);
    }
    return _object;
  }else{
    return  obj && obj +"";
  }
};
CbUtils.install = function(Vue, options){
  var common = {
    methods: {
      t(value, placeholders) {
        return replaceWithPlaceholders(value, placeholders);
      }
    }
  }

  Vue.mixin(common);
};

export default CbUtils;