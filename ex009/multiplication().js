function Generate(){
    let numberx = document.querySelector('input#inumber')
    let result = document.querySelector('option#result')
    let space1 = document.querySelector('option#Value1')
    let space2 = document.querySelector('option#Value2')
    let space3 = document.querySelector('option#Value3')
    let space4 = document.querySelector('option#Value4')
    let space5 = document.querySelector('option#Value5')
    let space6 = document.querySelector('option#Value6')
    let space7 = document.querySelector('option#Value7')
    let space8 = document.querySelector('option#Value8')
    let space9 = document.querySelector('option#Value9')
    
    let number = Number(numberx.value)
    let n1 = number * 1
    let n2 = number * 2
    let n3 = number * 3
    let n4 = number * 4
    let n5 = number * 5
    let n6 = number * 6
    let n7 = number * 7
    let n8 = number * 8
    let n9 = number * 9
    let n10 = number * 10

    if (number.length == 0){
        window.alert('[ERROR] Please, fill in the Number and try again')
    } else{
    result.innerHTML = `${number} x 1 = ${n1}`
    space1.innerHTML = `${number} x 2 = ${n2}`
    space2.innerHTML = `${number} x 3 = ${n3}`
    space3.innerHTML = `${number} x 4 = ${n4}`
    space4.innerHTML = `${number} x 5 = ${n5}`
    space5.innerHTML = `${number} x 6 = ${n6}`
    space6.innerHTML = `${number} x 7 = ${n7}`
    space7.innerHTML = `${number} x 8 = ${n8}`
    space8.innerHTML = `${number} x 9 = ${n9}`
    space9.innerHTML = `${number} x 10 = ${n10}`
}
}