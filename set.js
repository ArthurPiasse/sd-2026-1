let conj = new Set([1, 2, 3, 4, 5]) // Cria um novo conjunto (Set) com os elementos 1, 2, 3, 4 e 5

conj.add(6) // Adiciona o elemento 6 ao conjunto
conj.add(3) // Tenta adicionar o elemento 3 novamente, mas como os conjuntos não permitem elementos duplicados, isso não terá efeito

conj.delete(2) // Remove o elemento 2 do conjunto

console.log(conj) // Imprime o conjunto, que contém os elementos {1, 3, 4, 5, 6}


