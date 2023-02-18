const buttonAdd = document.querySelector('#addTechnology')
let inputRows = 0
const developers = []
const form = document.querySelector('#dev-register')

buttonAdd.addEventListener('click', function(event) {
  event.preventDefault()

  const ul = document.querySelector('#technologiesList')
  
  const newLi = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newLi.id = `row${rowIndex}`
  newLi.className = `rows`
  
  const labelText = document.createElement('label')
  labelText.setAttribute('for', 'devTechnology')
  labelText.innerText = 'Name: '

  const inputText = document.createElement('input')
  inputText.type = 'text'
  inputText.name = 'devTechnology'

  const span = document.createElement('span')
  span.innerText = ' Work experience: '

  const inputRadio1 = document.createElement('input')
  inputRadio1.type = 'radio'
  inputRadio1.name = `techExperience${rowIndex}`
  inputRadio1.id = `radioExperience${rowIndex}.1`
  inputRadio1.value = '0-2 years'

  const labelRadio1 = document.createElement('label')
  labelRadio1.setAttribute('for', `radioExperience${rowIndex}.1`)
  labelRadio1.innerText = '0-2 years'

  const inputRadio2 = document.createElement('input')
  inputRadio2.type = 'radio'
  inputRadio2.name = `techExperience${rowIndex}`
  inputRadio2.id = `radioExperience${rowIndex}.2`
  inputRadio2.value = '3-4 years'

  const labelRadio2 = document.createElement('label')
  labelRadio2.setAttribute('for', `radioExperience${rowIndex}.2`)
  labelRadio2.innerText = '3-4 years'

  const inputRadio3 = document.createElement('input')
  inputRadio3.type = 'radio'
  inputRadio3.name = `techExperience${rowIndex}`
  inputRadio3.id = `radioExperience${rowIndex}.3`
  inputRadio3.value = '5+ years'

  const labelRadio3 = document.createElement('label')
  labelRadio3.setAttribute('for', `radioExperience${rowIndex}.3`)
  labelRadio3.innerText = '5+ years '

  const buttonRemove = document.createElement('button')
  buttonRemove.type = 'button'
  buttonRemove.innerText = 'Remove'
  buttonRemove.id = `remove${rowIndex}`

  buttonRemove.addEventListener('click', function(ev) {
    ev.preventDefault()
    const ul = document.querySelector('#technologiesList')
    const li = document.querySelector(`#row${rowIndex}`)
    
    ul.removeChild(li)
  })

  newLi.append(labelText, inputText, span, inputRadio1, labelRadio1, inputRadio2, labelRadio2, inputRadio3, labelRadio3, buttonRemove)
  ul.appendChild(newLi)
})




form.addEventListener('submit', function(evnt) {
  evnt.preventDefault()

  const devName = document.getElementById('fullName')
  const liRows = document.querySelectorAll('.rows')
  
  let technologies = []
  liRows.forEach(function (row) {
    const techName = document.querySelector(`#${row.id} input[name="devTechnology"]`).value
    const techExp = document.querySelector(`#${row.id} input[type="radio"]:checked`).value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = {
    developerName: devName.value,
    technologies: technologies
  }

  developers.push(newDev)
  alert(`Developer successfully registered!`)
  devName.value = ''
  liRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers)
})

