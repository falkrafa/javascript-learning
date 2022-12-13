
const addSquare = (a,b)=>{
  const square = a => a*a
  let sqrA = square(a)
  let sqrB = square(b)

  console.log(`A soma das raizes quadradas é ${sqrA+sqrB}`)
}

addSquare(2,2)