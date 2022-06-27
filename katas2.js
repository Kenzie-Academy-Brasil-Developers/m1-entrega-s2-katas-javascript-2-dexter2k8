// comece a criar a sua função add na linha abaixo
function add(a, b) {
    let soma = a
    for (let i = 0; i < b; i++) {
        soma++
    }
    return soma
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a, b) {
    let multiplica = 0
    for (let i = 0; i < b; i++) {
        multiplica = add(multiplica, a)
    }
    return multiplica
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n) {
    let i = 1
    let eleva = x
    while (i < n) {
        eleva = multiply(eleva, x)
        i++
    }
    return eleva
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(factor) {
    let i = factor - 1
    let result = factor
    while (i > 0) {
        result = multiply(result, i)
        i--
    }
    return result
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n) {
    let i = -2
    let fibo = [0, 1]
    while (i <= n) {
        fibo.push(fibo[add(i, 2)] + fibo[add(i, 3)])
        i++
    }
    return fibo[n]
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
