let array = [
  'BMW',
  'Ferrari',
  'Mercedes'
];
console.log(array);
let x = 1;
console.log(array[x]);

console.log('trocando o nome Ferrari por Audi');
array.splice(1,1,'Audi');
console.log(array);

array.push('Volvo')
console.log(`Adicionando o nome Volvo a lista [${array}]`);

console.log(`Tamanho do array: ${array.length}`);