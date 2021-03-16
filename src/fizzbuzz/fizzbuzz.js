/*function fizzbuzz(num) {
    if(num % 3 === 0 && num % 5 === 0 ) {
        return "FizzBuzz"
    }else if(num % 3 === 0) {
        return "Fizz"
    }else if (num % 5 === 0) {
        return "Buzz"
    }
    return num
}*/

function fizzbuzz(num) {
    let resultado = ""
    if(num % 3 === 0 ) {
        resultado = "Fizz"
    }
    if(num % 5 === 0) {
        resultado +=  "Buzz"
    }
    if (resultado === "") {
        return num
    }
    return resultado;
}

module.exports = fizzbuzz;