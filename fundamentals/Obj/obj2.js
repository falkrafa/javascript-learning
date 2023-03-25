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

personagens.nome = 'pedro';

console.log(personagens.nome);

personagens.caracteristicas.forca +=5;

personagens.olhos.push('preto');

console.log(personagens.olhos);