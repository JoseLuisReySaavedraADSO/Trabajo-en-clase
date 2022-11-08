producto = Number(prompt(`Valor del producto: `))
iva = Number(prompt(`valor iva: `))
costo = (producto*(iva/100))+producto
alert(`El precio de su producto con iva del ${iva}% es ${costo} Pesos`)