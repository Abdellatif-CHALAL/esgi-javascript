function type_check_v1(variable, type) {
    switch (typeof variable) {
      case "symbol":
      case "number":
      case "string":
      case "boolean":
      case "undefined":
      case "function":
        return type === typeof variable;
      case "object":
        switch (type) {
          case "null":
            return variable === null;
          case "array":
            return Array.isArray(variable);
          default:
            return variable !== null && !Array.isArray(variable);
        }
    }
  }
  
//   console.log(type_check_v1(null, "null"));
//   console.log(type_check_v1(null, "object"));
//   console.log(type_check_v1({}, "null"));
//   console.log(type_check_v1(undefined, "undefined"));





function type_check_v3(param1,param2) {

  var bool = true;
  for (const key in param2) {
    if (key === "type") bool = bool && type_check_v1(param1,param2.type);
    if (key === "value") bool = bool && (param2.value === param1);
    if (key === "enum") bool = bool && (param2.enum.includes(param1));
  }
  return bool;
}









function type_check_v2(param1,param2) {
   
let bool = true;
   for (const key in param2) {
       if (key === "type" ) {
            if(!type_check_v1(param1,param2[key])){
                bool = false; break;
            }
       }
       if (key === "value" ) {
            if (JSON.stringify(param1) !== JSON.stringify(param2.value)){
                bool = false; break;
            }
        }
        if (key === "enum"){
          bool = false;
            for (let index = 0; index < param2.enum.length; index++) {
                if (JSON.stringify(param2.enum[index]) === JSON.stringify(param1)) {
                    return true; 
                }
            }
        }
   }
   return bool;
}

console.log(type_check_v2("bar", {type:"string",value:"bar",enum:['jhbjhk','hbhkgb']}));
