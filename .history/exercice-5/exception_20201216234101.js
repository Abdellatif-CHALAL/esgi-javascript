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
  this.name = "UndefinedPropertyError";
  var instance = new Error("property '"+property+"' not existe for path '"+path+"', expected one of :["+object+"]");
  Object.setPrototypeOf(instance,Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance,UndefinedPropertyError);
  }
  return instance;
}

function test() {
    try {
        UndefinedPropertyError("animal.type.name","chien",{ animal: { type: { name: "chien"} } });
    } catch (error) {
        console.log("Exception de catch "+error);
    }
}
// console.log(UndefinedPropertyError("animal.type.name","chienne",{ animal: { type: { name: "chienne"} } }));

console.log(test());