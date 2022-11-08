alert(`PARCIALES`)
nota1 = Number(prompt(`Ingresa el valor de tu nota 1`))
nota2 = Number(prompt(`Ingresa el valor de tu nota 2`))
nota3 = Number(prompt(`Ingresa el valor de tu nota 3`))
total = (nota1+nota2+nota3)/3
porcen1 = total*0.55
alert(`EXAMEN FINAL`)
nota4 = Number(prompt(`Ingresa el valor de tu nota 4`))
porcen2 = nota4*0.30
alert(`TRABAJO FINAL`)
nota5 = Number(prompt(`Ingresa el valor de tu nota 5`))
porcen3 = nota5*0.15
total = porcen1+porcen2+porcen3
alert(`Tu promedio final es de ${total}`)