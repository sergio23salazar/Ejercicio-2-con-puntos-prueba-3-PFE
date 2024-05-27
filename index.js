
let ObjetosDeValores2 = [];

function AñadirValores(factura) {
    let ObjectoDeValores = [];

    
    const {cliente, nombre, neto, iva} = factura

    let facturas = {
        Cliente: cliente.value,
        Nombre: nombre.value, 
        Neto: neto.value,
        Iva: iva.value,
    };
 
   ObjectoDeValores.push(facturas)
   ObjetosDeValores2.push(facturas)
   factura.reset()

   let Table = document.getElementById("tablaID")
   let Cuerpo = document.createElement("tbody")

   ObjectoDeValores.forEach(CreateTable)
   Table.appendChild(Cuerpo)
   
   function CreateTable(i)  {
    if (i.Cliente != "" ||  i.Nombre != "" || i.Neto != ""|| i.Iva != "") {
       let fila = document.createElement("tr")
   
       let td = document.createElement("td")
       td.innerText = i.Cliente
       fila.appendChild(td)
   
       td = document.createElement("td")
       td.innerText = i.Nombre
       fila.appendChild(td)
   
       td = document.createElement("td")
       td.innerText = i.Neto
       fila.appendChild(td)
   
       td = document.createElement("td")
       td.innerText = (+i.Neto) * (+i.Iva)/100
       fila.appendChild(td)

       td = document.createElement("td")
       td.innerText = (+i.Neto) +  (+i.Neto) * (+i.Iva)/100
       fila.appendChild(td)

    
       Cuerpo.appendChild(fila)
    }
}

   
}

function ResultadoTotal() {

    let TotalDelTotal = 0
    let IvaFinal = 0
    let NetoFinal = 0
    r1 = document.getElementById("resultado1");
    ObjetosDeValores2.forEach(MostrarValores)
    
    function MostrarValores(i) {
        TotalDelTotal += (+i.Neto) +  (+i.Neto) * (+i.Iva)/100
        IvaFinal +=   (+i.Neto) * (+i.Iva)/100
        NetoFinal += (+i.Neto)
    }

    r1.innerHTML = `Todo: ${TotalDelTotal}\nIva: ${IvaFinal}\nNeto: ${NetoFinal}`   

}


document.getElementById("factura").addEventListener("submit",
function(event) {
    event.preventDefault()
})
