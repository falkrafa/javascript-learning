let personagens = {
  nome: 'Rafael',
  idade: 90,
  pais: 'Brasil',
  olhos: ['azul', 'verde'],
  caracteristicas: {
    forca: 10,
    margia: 20
  }
}

console.log(`${personagens.nome} tem ${personagens.idade} anos`);
console.log(`${personagens.caracteristicas.forca}`);
console.log(`${personagens.olhos[1]}`);