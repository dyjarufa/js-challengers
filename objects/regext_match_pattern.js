// function regexFunctio(packageName) {
  
//   const regexPattern = /([\p{L}_$][\p{L}\p{N}_$]*\.)*[\p{L}_$][\p{L}\p{N}_$]*/;
//   // const packageNameValidated = regexPattern.test(packageName);
//   return packageName.match(regexPattern);
//   // if(packageNameValidated){
//   //   return packageName.replace(" ", "-").toLowerCase();
//   // }
  
// } 

// console.log(regexFunctio('org.my-app'))

function regexFunctio(packageName) {
  
  const regexPattern = /([\p{L}_$][\p{L}\p{N}_$]*\.)*[\p{L}_$][\p{L}\p{N}_$]*/;
  return regexPattern.exec(packageName);
 
  
} 

console.log(regexFunctio('tes.asda.testeapp'))