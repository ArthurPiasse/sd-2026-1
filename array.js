//Listas ordenadas de elementos
//Array é um tipo de estrutura de dados que armazena uma coleção de elementos, onde cada elemento é identificado por um índice. Os arrays são usados para armazenar e organizar dados de forma eficiente, permitindo acesso rápido aos elementos por meio de seus índices. Eles podem conter elementos de qualquer tipo, como números, strings, objetos ou até mesmo outros arrays. Os arrays são amplamente utilizados em programação para manipular conjuntos de dados e realizar operações como iteração, ordenação e filtragem.
// Array  [4]    [10]    [15]    [9]
// Índice: 0       1       2      3
// Uma lista começa a contar do 0, ou seja, o primeiro elemento do array é acessado pelo índice 0, o segundo elemento pelo índice 1, e assim por diante. Portanto, no exemplo acima, o elemento "4" está no índice 0, "10" no índice 1, "15" no índice 2 e "9" no índice 3. Para acessar um elemento específico em um array, você pode usar a sintaxe de colchetes, como array[índice]. Por exemplo, para acessar o elemento "15", você usaria array[2].

const { off } = require("node:cluster")

let numeros = [10,20,30,40,50,60]

console.log(numeros[0]) // Acessa o primeiro elemento do array, que é 10
console.log(numeros[3]) // Acessa o quarto elemento do array, que é 40
console.log(numeros[5]) // Acessa o sexto elemento do array, que é 60
console.log(numeros[6]) // Tenta acessar o sétimo elemento do array, mas retorna undefined, pois não existe um elemento nesse índice

let frutas = ["maçã", "banana", "laranja", "uva"]

frutas.push("abacaxi") // Adiciona "abacaxi" ao final do array frutas
frutas.unshift("morango") // Adiciona "morango" ao início do array frutas

frutas.pop() // Remove o último elemento do array frutas, que é "abacaxi"
frutas.shift() // Remove o primeiro elemento do array frutas, que é "morango"

frutas.splice(1,2) // Remove 2 elementos a partir do índice 1, ou seja, remove "banana" e "laranja" do array frutas

 frutas.forEach((fruta, indice) => {
    console.log(`Índice: ${indice}, Fruta: ${fruta}`)
 }
 ) // Itera sobre cada elemento do array frutas e imprime seu índice e value

 let misto = [42, "texto", true, {nome: "objeto"}, [1, 2, 3]]

 console.log(frutas[frutas.length - 1]) // Acessa o último elemento do array frutas, que é "uva"

 for (let i = 0; i < frutas.length; i++) {
     console.log(`Índice: ${i}, Fruta: ${frutas[i]}`)
 }
  // Itera sobre os índices do array frutas usando um loop for tradicional e imprime o índice e o valor correspondente

 for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`)
 } // Itera sobre cada elemento do array frutas e imprime o valor da fruta, sem mostrar o índice

 for (let indice in frutas) {
     console.log(`Índice: ${indice}, Fruta: ${frutas[indice]}`)
 }
  // Itera sobre os índices do array frutas e imprime o índice e o valor correspondente

