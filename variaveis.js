/* - Variáveis em JavaScript são Case-Sensitive nome e NOME são variáveis diferentes
- Variáveis em JavaScript tem suport a UNICODE, ou seja, podem conter caracteres acentuados e emojis */

// nome_completo snake_case
// nomeCompleto     camelCase   utilizado para variáveis e funções em JavaScript
// NomeCompleto     PascalCase

//Declaração de variáveis

// var nome = "João"
// let sobrenome = "Silva"
// const idade = 30

// if (true) {
//     var nome = "maria"
//     let sobrenome = "souza"
// }

// console.log(nome)
// console.log(sobrenome)
// console.log(idade)
 

// 9. COnversao de tipos de Dados em JavaScript

// String -> Numero

let num1 ="35"
Number(num1) //saida 35 converte a string para numero
let num = Number ("42") //saida numero 42

let float = parseFloat("3.14") // saida numero 3.14 converte a string para numero de ponto flutuante

let inteiro = parseInt("10.5") // converte a string para numero inteiro

//conversao de ponto flutuante para binario

//10 = 1010
//0.5 x 2 = 1.0 -> 1
//1010.1

// numero -> string

let str = String(100) //saida "100" converte o numero para string
let str2 = (200).toString() //saida "200" converte o numero para string usando o método toString()

// Boolean -> Numero

console.log(Number(true)) //saida 1
console.log(Number(false)) //saida 0

//======================
// 10. Literais em javaScript
//=======================

// Literais são valores fixos que podem ser atribuídos a variáveis ou usados diretamente em expressões. 
// Exemplos de literais em JavaScript:

let texto = "isso é uma string"
console.log(texto) //saida "isso é uma string"
let template = `isso é um template literal, ${texto}`

