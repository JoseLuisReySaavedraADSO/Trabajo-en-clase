alert(`¿Quiere averiguar el costo de uno o varios productos? `)
condicion = prompt(`Elija, uno o varios?`)
if (condicion == "uno" || condicion == 1 || condicion == "Uno"){
    costo = Number(prompt(`Cual es el costo del producto? `))
    aumento = costo*10/100
    valorca = costo + aumento
    console.log(`El costo del producto es ${valorca} Pesos`)
    console.log(`El costo de el iva es de ${aumento} Pesos`)
}else{if (condicion == "Varios" || condicion == "varios"){
    a = Number(prompt(`Cuantos productos desea agregar?`))
    total = 0
    ivatotal= 0
    for (var i=0; i<`${a}`; i++){
        costo = Number(prompt(`Cual es el costo del producto? `))
        aumento = costo*10/100
        valorca = costo + aumento
        ivatotal = aumento + ivatotal
        total = valorca + total
        console.log(`____________Producto ${i+1}____________\nEl costo del producto es ${valorca} Pesos\nEl costo de el iva es de ${aumento} Pesos`)
    }
    console.log(`____________TOTAL____________\nEl costo de los productos es ${total} Pesos\nEl costo de los productos con el iva es de ${ivatotal} Pesos`)
    }
}