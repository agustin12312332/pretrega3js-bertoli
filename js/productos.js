const caballosDeCarrera = [
    { id: 1, imagen: "🏇", nombre: "juan", precio: 20  },
    { id: 21, imagen: "🏇", nombre: "mariano", precio: 30 },
    { id: 2, imagen: "🏇", nombre: "velocidaman", precio: 25 },
    { id: 3, imagen: "🏇", nombre: "rapidin", precio: 23 },
    { id: 4, imagen: "🏇", nombre: "ya llegue", precio: 43 },
    { id: 5, imagen: "🏇", nombre: "El sin rostro", precio: 50},
]

function guardarFavsEnLocalStorage() {
    if (favoritos.length > 0) {
        localStorage.setItem('MisFavoritos', JSON.stringify(favoritos))
    } 
}

function recuperarFavoritosDeLocalStorage() {
    if (localStorage.getItem('MisFavoritos')) {
        return JSON.parse(localStorage.getItem('MisFavoritos'))
    } else {
        return []
    }
}


const favoritos = recuperarFavoritosDeLocalStorage()