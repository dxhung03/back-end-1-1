// const isStrongPassword = function(password){
//   let number = "0123456789";
//   let symbol = "!@#$%^&*()";
//   let newPassword = "";
//   let upperCount = 0;
//   let lowerCount = 0;
//   let isNumber = false;
//   let isSymbol = false; 
//   if(password.length >=8 ){
//     for(let i = 0; i < password.length; i++){
//       newPassword = password.charCodeAt(i);
//       if(newPassword >= 65 && newPassword <=90){
//         upperCount++;
//       }
//       if(newPassword >= 97 && newPassword <=122){
//         lowerCount++;
//       }
//       if(number.includes(password.charAt(i))){
//         isNumber = true;
//       }
//       if(symbol.includes(password.charAt(i))){
//         isSymbol = true;
//       }  
//     }
//   }
//   if(upperCount < 2 || lowerCount < 2 || !isSymbol || !isNumber) return false
//   return true;
// }
// console.log(isStrongPassword("AAAAAAaAAA1*s"));



const partialMask = function(email){
  let position = email.indexOf("@");
  let user = email.slice(0, position);
  let remainCount = user.length - 4;
  let newEmail = email.slice(0, 4) + "*".repeat(remainCount) + email.slice(position);

  console.log(newEmail)
}
partialMask("dohung@gmail.com");