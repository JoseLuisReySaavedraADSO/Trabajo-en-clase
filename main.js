alert(`Calcularemos el area de una circunferencia...`)
let num1 = Number(prompt(`Tenemos que el radio de nuestro radio es:`))
area = (Math.PI)*Math.pow(num1, 2)
long = 2*(Math.PI)*num1
console.log(`El area de la circunferencia es ${area}`)
console.log(`La longitud de la circunferencia es ${long}`)