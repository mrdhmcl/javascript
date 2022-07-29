hour = 2
console.log(`It is ${hour} o'clock`)

if (hour < 12 && hour > 5){
    console.log('Good morning!')
}

else if (hour >= 18){
    console.log('Good evening!')
}

else if (hour <= 5){
    console.log('Good midnight!')
}

else{
    console.log('Good afternoon!')
}