const tableCaballos = document.querySelector('#tablaProductos')
const inputBuscar = document.querySelector('#inputSearch')
const divToast = document.querySelector('div.toast-msg')

function crearFilaHTML(producto) {
        return `<tr>
                    <td class="class-table-number">${producto.id}</td>
                    <td class="emoji-image">${producto.imagen}</td>
                    <td>${producto.nombre}</td>
                    <td>$ ${producto.precio}</td>
                    <td><button id="${producto.id}" class="button button-outline button-big-emoji">🤍</button></td>
                </tr>`
}

function activarClickEnBotonesProductos() {
    const botones = document.querySelectorAll('button.button.button-outline.button-big-emoji')
    botones.forEach((boton)=> {
        boton.addEventListener("click", ()=> {
            let producto = caballosDeCarrera.find((prod)=> prod.id === parseInt(boton.id))
            favoritos.push(producto)
            divToast.textContent = "Se agregó un producto a favoritos: " + producto.nombre
            divToast.className = ' animacion-div'
            guardarFavsEnLocalStorage()
        })
    })
}

function cargarProductos(array) {
    tableCaballos.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto)=> tableCaballos.innerHTML += crearFilaHTML(producto) )
        activarClickEnBotonesProductos()
    } else {
        divToast.textContent = "No hay productos para listar."
    }
}

inputBuscar.addEventListener("search", ()=> {
    if (inputBuscar.value.trim() !== "") {
        let arrayResultante = caballosDeCarrera.filter((producto)=> producto.nombre.toLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
        cargarProductos(arrayResultante)
    }
})



cargarProductos(caballosDeCarrera)