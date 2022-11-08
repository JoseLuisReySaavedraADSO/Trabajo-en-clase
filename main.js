alert(`Vamos a obtener las raices reales de\nA * x2 +b * x + c\nsabiendo que x es un valor constante igual a 15`)
let a = Number(prompt(`Ingresar el valor de a`))
let b = Number(prompt(`Ingresar el valor de b`))
let c = Number(prompt(`Ingresar el valor de c`))
let x = 15
d = (b*b)-4*a*c
if (d<0){
    alert(`No existen soluciones reales!!`)
}else{
    d1=(-b+Math.sqrt(d))/(2*a)
    d2=(-b-Math.sqrt(d))/(2*a)
    console.log(`_____________SOLUCION_____________\nSolucion x1: ${d1}\nSolucion x2: ${d2}`)
}