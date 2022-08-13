function factorial(n){
    let mult = 1
    for (let x = n; x > 1; x--){
        mult *= x
    }
    return mult
}

console.log(factorial(1))