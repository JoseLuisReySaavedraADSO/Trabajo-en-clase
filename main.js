alert(`Recordemos que para formula calcular un cilindo necesitamos el valor del radio y la altura`)
let num1 = Number(prompt(`Cual es el radio del cilindro:`))
let num2 = Number(prompt(`Cual es la altura del mismo:`))
area=(2*((Math.PI)*(Math.pow(num1,2))))+((2*(math.pi)*num1)*num2)
vol=((Math.PI)*num1*2)*num2
console.log(`Teniendo eso sabemos que el área del cilindro es igual a ${area}`)
console.log(`El valor del volumen seria ${vol}`)