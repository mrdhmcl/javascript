/*let num = [9, 2, 8, 1, 7]

console.log(`My variable num is ${num}`)

num[5] = 3

console.log(`But now I've added some more, so num = ${num}`)



console.log(`You can always have some more in the family. num = ${num}`)

num.sort()
num.push(48)
console.log(`But a good place is an organized one, so num = ${num}`)

console.log(`What is the total size of the family? A: ${num.length}. Which one is the fourth? ${num[3]}`)



num.sort()

for (let element = 0; element < num.length; element++){
    console.log(`The position ${element} of my variable num is ${num[element]}`)
}


for (let element in num){
    console.log(`The position ${element} of my variable num is ${num[element]}.`)
}
*/

let values = [9, 7, 5, 6]

console.log(`${values}`)

console.log(`The vetor has ${values.length} positions`)

console.log(`The first value is ${values[0]}.`)

let ele = values.indexOf(5)

if(ele == -1){
    console.log('The value can not be found.')
}else{
console.log(`The value 6 is in the position ${ele}.`)}