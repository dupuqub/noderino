
var
sum        = (a, b) => a + b,
makeNumber = item => Number(item),
isInteger  = item => Number.isInteger(item),

argvSum = process.argv
  .map   (makeNumber)
  .filter(isInteger)
  .reduce(sum)

console.log(argvSum)

