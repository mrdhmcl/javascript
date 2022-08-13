let n = 5
let mult = 1
function factorial (){
    for (let x = n; x > 1; x--){
        mult *= x
    }
}

console.log(`the result is ${mult}`)