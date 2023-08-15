let n1 = 5;
let n2 = 8;

console.log(n1+n2);  //soma
console.log(n1-n2);  //subtração
console.log(n1*n2);  //multiplicação
console.log(n1/n2);  //divisão
console.log(n1**n2);  //expnenciação
console.log(Math.sqrt(n1))  //raiz quadrada
console.warn("Olá Funções")

//soma
function soma(numero1, numero2){
    return numero1 + numero2
}

console.log(soma(4, 19))
console.log(soma(12, 19))

//subtração
function subtração(numero1, numero2){
    return numero1 - numero2
}

console.log(subtração(4, 19))
console.log(subtração(12, 19))

//multiplicação
function multiplicação(numero1, numero2){
    return numero1 * numero2
}

console.log(multiplicação(4, 19))
console.log(multiplicação(12, 19))

//divisão
function divisão(numero1, numero2){
    return numero1 / numero2
}

console.log(divisão(4, 19))
console.log(divisão(12, 19))

//exponenciação
function expnenciação(numero1, numero2){
    return numero1 ** numero2
}

console.log(expnenciação(4, 19))
console.log(expnenciação(12, 19))

//raiz quadrada
function raiz(numero1, numero2){
    return numero1 + numero2
}

console.log(raiz(4, 19))
console.log(raiz(12, 19))

const divisao = (v1, v2) =>{
    let msg = ""
    if (v1 > v2) {
        let resultado = v1 / v2
        msg = resultado
        return msg
    }
    msg "insira um valor para v2 menor"

    return 
}

console.log(divisao(10, 2))
console.log(divisao(2, 20))


const divisaoII = (v1, v2) =>{
    if (v1 > v2) {
        let resultado = v1 / v2
        return resultado
    }
    return "insira um valor para v2 menor"
    
}

console.log(divisaoII(10, 2))
console.log(divisaoII(2, 20))




