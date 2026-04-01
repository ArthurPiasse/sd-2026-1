// // Tipos de funçoes em JavaScript

// // Função declarativa(tradicional)

// function saudacao(nome){

//     return `Olá, ${nome}`
// }

// console.log(saudacao("maria"))

// // função anonima

// const soma = function(a, b){
//     return a + b

// }
// console.log(soma(2, 3))


// const sub = function(a, b){
//     return a - b 
// }
// function executarOperacao(funcao, x, y){
//     return funcao(x,y)
// }

// console.log(executarOperacao(sub, 5,3))

// const multiplicar = (a, b) => console.log( "o resultado da multiplicação é: " + (a * b) )

// console.log(multiplicar(2, 3)){
    
//     return a * b

// }




// console.log(multiplicar(4,2))

// function numero (numero = 10|){
//     return `O número ${numero} é um número`
// }

// console.log(numero(26))


// (function(){
//     console.log("Autoexecutável")

// }())

// function processar (valor, callback){
//     console.log("autoexecutavel")
//     callback(valor)
 
// }
 
// processar(10, (num) => console.log(`resultado ${num*2}`))
 
// function dobrar(){
//     console.log(`o dobro do numero ${num} é: `, num * 2)
 
// }
// processar(10, dobrar)

// async function exemplo(){
//     console.log("Antes);
        
//         await new Promise(resolve => setTimeout(resolve, 2000))
        
//     console.log("Depois")
// }

