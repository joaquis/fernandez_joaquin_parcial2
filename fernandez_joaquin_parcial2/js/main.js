/* FUNCIONAMIENTO DE DATOS CURIOSOS AL AZAR (Para index.html) */

// Array con los datos curiosos extraídos del archivo texto.txt
const datosCuriosos = [
    "Casey Reas es co-creador de Processing, un lenguaje de programación visual diseñado para artistas y estudiantes de diseño.",
    "Junto a Ben Fry desarrolló Processing como una herramienta educativa en el MIT Media Lab en 2001.",
    "Su obra artística se basa en la escritura de algoritmos que generan imágenes en constante cambio.",
    "Está influenciado por el arte conceptual y sistemático, especialmente por las instrucciones visuales de Sol LeWitt.",
    "Ha realizado exposiciones en museos como el MoMA, el Centre Pompidou y el ICA de Londres.",
    "Muchas de sus obras son generadas en tiempo real, por lo que nunca se ven exactamente igual dos veces.",
    "Publicó libros fundamentales sobre programación creativa como 'Processing: A Programming Handbook for Visual Designers and Artists'.",
    "Ha trabajado como profesor en el Departamento de Diseño de Medios en la UCLA (Universidad de California, Los Ángeles).",
    "Explora el arte generativo como un proceso basado en reglas simples que producen resultados complejos y emergentes.",
    "Además de visuales digitales, ha realizado impresiones generativas de gran formato como obras únicas o en series."
];

function mostrarDatoAlAzar() {
    const contenedorDato = document.getElementById('contenedor-dato');
    // Verificamos si estamos en la página que tiene este elemento
    if (contenedorDato) {
        const indiceAzar = Math.floor(Math.random() * datosCuriosos.length);
        contenedorDato.innerHTML = `<p>"${datosCuriosos[indiceAzar]}"</p>`;
    }
}

/*  FUNCIONAMIENTO DE LA GALERÍA DINÁMICA DE OBRAS (Para biografia.html) */

// Array de objetos con las obras de Casey Reas y las imágenes provistas
const obrasReas = [
    { titulo: "Software Structure 001", anio: 2004, imagen: "imagenes/reas.jpg" },
    { titulo: "Process Compendium", anio: 2007, imagen: "imagenes/reas-1.jpg" },
    { titulo: "MicroImage", anio: 2011, imagen: "imagenes/reas-2.jpg" },
    { titulo: "KNBC", anio: 2014, imagen: "imagenes/reas-3.jpg" },
    { titulo: "Century", anio: 2012, imagen: "imagenes/reas-1.jpg" } // Reutilizada para completar mínimo 5
];

function renderizarGaleria() {
    const contenedorGaleria = document.getElementById('contenedor-galeria');
    if (contenedorGaleria) {
        contenedorGaleria.innerHTML = ""; // Limpiamos por si acaso
        
        obrasReas.forEach(obra => {
            // Creamos la tarjeta usando template strings
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta-obra');
            tarjeta.innerHTML = `
                <img src="${obra.imagen}" alt="${obra.titulo}" style="width:100%; height:auto; border-radius:4px; margin-bottom:0.5rem;">
                <h3>${obra.titulo}</h3>
                <p>Año: ${obra.anio}</p>
            `;
            contenedorGaleria.appendChild(tarjeta);
        });
    }
}

function inicializarCambioDiseno() {
    const btnCambiarDiseno = document.getElementById('btn-cambiar-diseno');
    const contenedorGaleria = document.getElementById('contenedor-galeria');

    if (btnCambiarDiseno && contenedorGaleria) {
        btnCambiarDiseno.addEventListener('click', () => {
            // Intercambiamos las clases de flexbox que definimos en el CSS
            if (contenedorGaleria.classList.contains('diseno-grilla')) {
                contenedorGaleria.classList.remove('diseno-grilla');
                contenedorGaleria.classList.add('diseno-lista');
                btnCambiarDiseno.textContent = "Ver como Grilla";
            } else {
                contenedorGaleria.classList.remove('diseno-lista');
                contenedorGaleria.classList.add('diseno-grilla');
                btnCambiarDiseno.textContent = "Ver como Lista";
            }
        });
    }
}

/* INICIO AL CARGAR LA PÁGINA */
document.addEventListener('DOMContentLoaded', () => {
    // Funciones de Página de Inicio
    mostrarDatoAlAzar();
    const btnDato = document.getElementById('btn-dato');
    if (btnDato) {
        btnDato.addEventListener('click', mostrarDatoAlAzar);
    }

    // Funciones de Página de Obras
    renderizarGaleria();
    inicializarCambioDiseno();
});