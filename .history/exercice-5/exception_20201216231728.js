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
   if(property !== prop_access(object,path)){
       throw "property '"+property+"' not existe for path '"+path+"', expected one of :[type,name]";
   }
}

function test() {
    try {
        UndefinedPropertyError("animal.type.name","chienne",{ animal: { type: { name: "chien"} } });
    } catch (error) {
        console.log("Exception de catch "+error);
    }
}
console.log(UndefinedPropertyError("animal.type.name","chienne",{ animal: { type: { name: "chienne"} } }));

console.log(test());