let pessoa = {
    nome: "Arthur",
    idade: 21,
    profissao: "Desenvolvedor",
    hobbies: ["programar", "jogar videogame", "viajar"],
    endereco: {
        rua: "Rua Principal",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP"
    }
} // Cria um objeto chamado "pessoa" com várias propriedades, incluindo nome, idade, profissão, hobbies e endereço

console.log(pessoa.nome) // Acessa a propriedade "nome" do objeto pessoa, que é "Arthur"
console.log(pessoa.idade) // Acessa a propriedade "idade" do objeto pessoa, que é 21
console.log(pessoa.hobbies[0]) // Acessa o primeiro elemento do array de hobbies do objeto pessoa, que é "programar"
console.log(pessoa.endereco.cidade) // Acessa a propriedade "cidade" dentro do objeto "endereco" do objeto pessoa, que é "São Paulo"

for (let chave in pessoa) {
    console.log(`Chave: ${chave}, Valor: ${pessoa[chave]}`)
} // Itera sobre as chaves do objeto pessoa usando um loop for...in e imprime cada chave e seu valor correspondente

console.log(Object.entries(pessoa)) // Transforma o objeto pessoa em um array de pares chave-valor usando Object.entries() e imprime o resultado, que é um array contendo sub-arrays com as chaves e valores do objeto pessoa
 