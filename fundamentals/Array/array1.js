let array = [1,2,3,4,6,7,8,9,10]

console.log(`Array = [${array}]`)
console.log(`size = ${array.length}`)
array.push(5)
console.log(`Adicionando o valor 5 = [${array}]`)
// array.shift()
// console.log(`tirando do comeco = [${array}]`)
let pos=2
console.log(array.splice(pos,array.length))
console.log(array)
let pos1 = 1;
array.splice(pos1,0,'teste')
console.log(array)