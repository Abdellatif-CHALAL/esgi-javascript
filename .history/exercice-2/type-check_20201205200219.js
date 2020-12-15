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
          if ((param2.enum.includes(param1))) {
            bool = false; break;
          }
        }
   }
   return bool;
}

console.log(type_check_v2({bar:"bar"}, {type:"object",value:{bar:"bar"}}));
