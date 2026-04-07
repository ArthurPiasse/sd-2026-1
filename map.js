let mapa = new Map()

mapa.set("nome", "Arthur") // Adiciona um par chave-valor ao mapa, onde a chave é "nome" e o valor é "Arthur"
mapa.set(21, "Numero como chave") // Adiciona um par chave-valor ao mapa, onde a chave é o número 21 e o valor é "Numero como chave"
mapa.set(false, "Booleano como chave") // Adiciona um par chave-valor ao mapa, onde a chave é o booleano false e o valor é "Booleano como chave"

console.log(mapa.get("nome")) // Acessa o valor associado à chave "nome" no mapa, que é "Arthur"

console.log(mapa.has(true)) // Verifica se a chave true existe no mapa, retorna false

mapa.forEach((valor, chave) => {
    console.log(`Chave: ${chave}, Valor: ${valor}`)
}) // Itera sobre cada par chave-valor do mapa e imprime a chave e o valor correspondente

