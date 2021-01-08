function prop_access(obj, path) {
    if(path === "" || path == null){
      return obj;
    }
    if(obj == null){
      return path + " not exist";
    }
    let props = path.split('.');
    let result = obj;
    for (var i = 0; i < props.length; i++) {
      result = result[props[i]];
      if (typeof result === 'undefined'){
        return path + "not exist";
      }
    }
    return result;
  }


function UndefinedPropertyError(path,property,object) {
   if(property !== prop_access(object,path))
    retrun "property '"+property+"'"
}