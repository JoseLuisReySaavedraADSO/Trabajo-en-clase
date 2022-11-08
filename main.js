alert(`Sabemos que para calcular el volumen de un elipsoide\nV = (4/3) * PI * alto * ancho * alto`)
let a = Number(prompt(`altura del elipsoide: `))
let an = Number(prompt(`anchura del elipsoide: `))
let l = Number(prompt(`largo del elipsoide: `))
vol = (4/3)*(Math.PI)*a*an*l
console.log(`Entonces el volumen del elipsoide es ${vol}`)