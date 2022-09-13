const celsius = 17
const fahrenheit = 50

function transformTemperature(unity) {
  switch (unity) {

    case celsius:
    let celsiusf = celsius * 9 / 5 + 32;
    console.log(`${celsius}C is equal to ${celsiusf}F.`);
    break;

    case fahrenheit:
    let fahrenheitc = (fahrenheit - 32) * 5 / 9
    console.log(`${fahrenheit}F is equal to ${fahrenheitc}C.`)
    break;

    default:
    console.log('Invalid temperature unity')
  }
}

transformTemperature(fahrenheit);