let duracion = prompt(`¿Quiere expresar la duracion en horas o minutos?`)
let valor = 355
if(duracion == "minutos"){
    minut = Number(prompt(`Cuantos minutos duro la llamada? `))
    cost = minut*355
    aumento = cost*(20/100)
    valorca = cost+aumento
    iva1 = valorca-cost
    console.log(`El valor de su llamada sin iva es ${cost} Pesos\nEl costo de la llamada con el iva es ${valorca} Pesos\nUsted pago ${iva1} Pesos de iva`)
}else{if (duracion == "horas"){
        hrs = Number(prompt(`Cuantos horas duro la llamada? `))
    minut = hrs*60
    cost = minut*355
    aumento = cost*(20/100)
    valorca = cost+aumento
    iva1 = valorca-cost
    console.log(`El valor de su llamada sin iva es ${cost} Pesos\nEl costo de la llamada con el iva es ${valorca} Pesos\nUsted pago ${iva1} Pesos de iva`)
    }else{
        alert(`Ingresa una opcion valida!!`)
    }
}