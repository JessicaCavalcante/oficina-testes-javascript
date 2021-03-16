const fizzbuzz  = require('./fizzbuzz')

describe('não multiplo de 3 e 5',() => {
    it('deve retornar ele mesmo quando for 1', () =>{
        const resultado = fizzbuzz(1)
        expect(resultado).toBe(1)
    });
});

describe('não multiplo de 3 e 5',() => {
    it('deve retornar ele mesmo quando for 2', () =>{
        const resultado = fizzbuzz(2)
        expect(resultado).toBe(2)
    });
});

describe('multiplo de 3',() => {
    it('deve retornar "Fizz" quando número for 3', () =>{
        const resultado = fizzbuzz(6)
        expect(resultado).toBe("Fizz")
    });
});

describe('multiplo de 5',() => {
    it('deve retornar "Buzz" quando número for 5', () =>{
        const resultado = fizzbuzz(10)
        expect(resultado).toBe("Buzz")
    });
});

describe('multiplo de 3 e 5',() => {
    it('deve retornar "FizzBuzz" quando número for 15', () =>{
        const resultado = fizzbuzz(15)
        expect(resultado).toBe("FizzBuzz")
    });
});