let n1 = document.getElementById('iv1')
let table = document.getElementById('itable')
let array = []
let res = document.querySelector('p#res')

function add(){
        if (n1.value > 0 && n1.value <= 100 && array.indexOf(Number(n1.value)) == -1){
        array.push(Number(n1.value))
        let option = document.createElement('option')
        option.text = `Value ${n1.value} has been added.`
        table.appendChild(option)
        } else{
            window.alert('The number is invalid or it has already been added to the list. Try again.')
        }
        n1.value = ''
        n1.focus()
}

function result(){
    let min = Math.min(...array)
    let max = Math.max(...array)
    let sum = 0

    if (array.length == 0){
        window.alert('Add numbers before clicking on finish')
    } else{
        
    for(let c = 0; c < array.length; c++){
        sum += array [c]
    }

    let avg = sum / array.length

    res.innerHTML = `<p>In all, we have ${array.length} registered numbers.</p>
    <p>The highest registered value is ${max}.</p>
    <p>The lowest registered value is ${min}.</p>
    <p>The sum of all registered values is: ${sum}.</p>
    The average of all registered values is: ${avg}.`
}
}