/*
* Password check with conditions agains regex conditions, with at least:
* - 10 characters
* - 1+ lowercase letter
* - 1+ uppercase letter
* - 1+ numeric symbol
*/

let regex = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10,})" 
// (?=.[!@#\$%\^&]) Opt for special chars

const checkio = (password) => {return password.match(regex) ? true : false}

console.log(checkio('A1213pokl')) // False
console.log(checkio('bAse730onE4')) // True
console.log(checkio('asasasasasasasaas')) // False
console.log(checkio('QWERTYqwerty')) // False
console.log(checkio('123456123456')) // False
console.log(checkio('QwErTy911poqqqq')) // True