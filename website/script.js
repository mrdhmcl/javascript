function checker(){
    var date = new Date()
    var yearr = date.getFullYear()
    var fyearr = window.document.getElementById('itxtyear')
    var res = window.document.querySelector('div#res')

    if(fyearr.value.length == 0 || Number(fyearr.value) > yearr) {
        window.alert('[ERROR] Check the data and try again!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = yearr - Number(fyearr.value)
        var gender = ''
        if (f)
        res.innerHTML = `Calculated age: ${age}`
    }
}