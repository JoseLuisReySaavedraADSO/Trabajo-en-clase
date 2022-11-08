alert(`Tenemos que calcular la ecuacion:\n(a+7*c)/(b+2-a)+2*b`)
let a = Number(prompt(`El valor de a es: `))
let b = Number(prompt(`El valor de b es: `))
let c = Number(prompt(`El valor de c es: `))
ecu=(a+7*c)/(b+2-a)+2*b
console.log(`El valor de la ecuacion es ${ecu}`)