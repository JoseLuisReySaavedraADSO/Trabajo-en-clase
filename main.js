examen1 = Number(prompt(`Nota del examen 1: `))
examen2 = Number(prompt(`Nota del examen 2: `))
examen3 = Number(prompt(`Nota del examen 3: `))
examen4 = Number(prompt(`Nota del examen 4: `))
nota = (examen1+examen2+examen3+examen4)/4
if (nota<3){
    alert(`No aprobo`)
}else{
    alert(`Aprobo`)
}
alert(`promedio de las calificacione es ${nota}`)