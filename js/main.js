const opciones = [
    { id: 1, nombre: "Black", img: "images/cerveza negra.jpg", cantidad: 1},
    { id: 2, nombre: "Red", img: "images/cerveza roja.jpg", cantidad: 1},
    { id: 3, nombre: "Blond", img: "images/cerveza rubia.jpg", cantidad: 1},
];

const blackBeer = [
    { id: 4, nombre: "Porter", precio: 800},
    { id: 5, nombre: "Stout", precio: 800},
    { id: 6, nombre: "Cream Stout", precio: 800},
];

const blondBeer = [
    { id: 7, nombre: "Ipa", precio: 750},
    { id: 8, nombre: "Golden", precio: 750},
    { id: 9, nombre: "Kolsch", precio: 750},
];

const redBeer = [
    { id: 10, nombre: "Scotch", precio: 700},
    { id: 11, nombre: "Lager", precio: 700},
    { id: 12, nombre: "Amber Ale", precio: 700},
];

let menu = [];

let favoritos = [];

favoritos = (localStorage.getItem('favoritos')) ? JSON.parse(localStorage.getItem('favoritos')) : [];

const menuPrincipal = document.getElementById("menu");

const verVariedades = () => {
    opciones.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("col-lg-4" ,"col-sm-12");
        card.innerHTML = `
        <div class="card">
            <img src="${item.img}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
              <h5 class="card-title">${item.nombre}</h5>
              <button class="btn btn-primary" id="boton${item.id}">Ver mas!</button>
            </div>
        </div>
        `;
        menuPrincipal.appendChild(card);
        
        const boton = document.getElementById(`boton${item.id}`);
            boton.addEventListener("click", () =>{
                display(item.id);
            })
    })
}
verVariedades();

const display = (id) => {
    if ( id === 1){
        const opcionEnMenu = menu.find((item) => item.id === id);
        if(!opcionEnMenu){
        const opcion = opciones.find((opcion) => opcion.id === id);
        menu.push(opcion);    
            
        const black = document.getElementById("beer");

        const verBlack = () => {
            blackBeer.forEach((item) => {
                const card = document.createElement("div");
                card.innerHTML = `
                <div class="card">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID:  ${item.id}</li>
                      <li class="list-group-item">Variedad:  ${item.nombre}</li>
                      <li class="list-group-item">Precio:  $${item.precio}</li>
                      <button class="btn btn-primary" id="boton2${item.id}">Agregar a Favoritos</button>
                      <button class="btn btn-primary" id="boton3${item.id}">Quitar de Favoritos</button>
                    </ul>
                </div>
               `;
               black.appendChild(card);

               const boton2 = document.getElementById(`boton2${item.id}`);
               boton2.addEventListener("click", () => {
               agregarFavoritos(item.id);
               });
               const boton3 = document.getElementById(`boton3${item.id}`);
               boton3.addEventListener("click", () => {
                quitarFavoritos(item.id);
               })
            })
        }
        verBlack();
        }
        
    }else if ( id === 2 ){
        const opcionEnMenu = menu.find((item) => item.id === id);
        if(!opcionEnMenu){
        const opcion = opciones.find((opcion) => opcion.id === id);
        menu.push(opcion); 

        const red = document.getElementById("beer");

        const verRed = () => {
            redBeer.forEach((item) => {
                const card = document.createElement("div");
                card.innerHTML = `
                <div class="card">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID:  ${item.id}</li>
                      <li class="list-group-item">Variedad:  ${item.nombre}</li>
                      <li class="list-group-item">Precio:  $${item.precio}</li>
                      <button class="btn btn-primary" id="boton4${item.id}">Agregar a Favoritos</button>
                      <button class="btn btn-primary" id="boton5${item.id}">Quitar de Favoritos</button>
                    </ul>
                </div>
               `;
               red.appendChild(card);

               const boton4 = document.getElementById(`boton4${item.id}`);
               boton4.addEventListener("click", () => {
               agregarFavoritos1(item.id);
               });
               const boton5 = document.getElementById(`boton5${item.id}`);
               boton5.addEventListener("click", () => {
                quitarFavoritos(item.id);
               })
            })
        }
        verRed();
    }
    }else if ( id === 3 ){
        const opcionEnMenu = menu.find((item) => item.id === id);
        if(!opcionEnMenu){
        const opcion = opciones.find((opcion) => opcion.id === id);
        menu.push(opcion); 

        const blond = document.getElementById("beer");

        const verBlond = () => {
            blondBeer.forEach((item) => {
                const card = document.createElement("div");
                card.innerHTML = `
                <div class="card">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID:  ${item.id}</li>
                      <li class="list-group-item">Variedad:  ${item.nombre}</li>
                      <li class="list-group-item">Precio:  $${item.precio}</li>
                      <button class="btn btn-primary" id="boton6${item.id}">Agregar a Favoritos</button>
                      <button class="btn btn-primary" id="boton7${item.id}">Quitar de Favoritos</button>
                    </ul>
                </div>
               `;
               blond.appendChild(card);

               const boton6 = document.getElementById(`boton6${item.id}`);
               boton6.addEventListener("click", () => {
               agregarFavoritos2(item.id);
               });
               const boton7 = document.getElementById(`boton7${item.id}`);
               boton7.addEventListener("click", () => {
                quitarFavoritos(item.id);
               })
            })
        }
        verBlond();
    }
    }
}

const agregarFavoritos = (id) => {
    const productoEnFavoritos = favoritos.find((producto) => producto.id === id);
    if (!productoEnFavoritos) {
     const producto = blackBeer.find((producto) => producto.id === id);
     favoritos.push(producto);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

const agregarFavoritos1 = (id) => {
    const productoEnFavoritos = favoritos.find((producto) => producto.id === id);
    if (!productoEnFavoritos) {
     const producto = redBeer.find((producto) => producto.id === id);
     favoritos.push(producto);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

const agregarFavoritos2 = (id) => {
    const productoEnFavoritos = favoritos.find((producto) => producto.id === id);
    if (!productoEnFavoritos) {
     const producto = blondBeer.find((producto) => producto.id === id);
     favoritos.push(producto);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

const quitarFavoritos = (id) => {
    favoritos = favoritos.filter((producto) => producto.id !== id);
    mostrarFavoritos();
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

const contenedorFavoritos = document.getElementById("favoritos!");
const verFavoritos = document.getElementById("fav");

verFavoritos.addEventListener("click", () => {
    mostrarFavoritos();
  })

  const mostrarFavoritos = () => {
    contenedorFavoritos.innerHTML = "";
    favoritos.forEach(producto => {
      const card = document.createElement("div");
      card.classList.add("col-xl-3", "col-md-6");
      card.innerHTML = `
        <div class="card">
          <div>
            <h5>${producto.id}</h5>
            <h5>${producto.nombre}</h5>
            <p>${producto.precio}</p>
          </div>
        </div>
      `;
      contenedorFavoritos.appendChild(card);
    });
};  


const eliminarTodo = document.getElementById("delete")

eliminarTodo.addEventListener("click", () => {
    eliminarTododeFav();
})

const eliminarTododeFav = () => {
    favoritos = [];
    mostrarFavoritos();

    localStorage.clear();
}