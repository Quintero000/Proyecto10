
/* Seleccionamos todas las pestañas del HTML */
const pestanas = document.querySelectorAll(".pestana");

/* Seleccionamos todos los paneles que contienen el contenido */
const paneles = document.querySelectorAll(".panel");

/* Recorremos todas las pestañas */
pestanas.forEach(function(pestana) {

    /* Detectamos cuando el usuario hace clic en una pestaña */
    pestana.addEventListener("click", function() {

        /* Quitamos la clase activa de todas las pestañas */
        pestanas.forEach(function(p) {
            p.classList.remove("activa");
        });

        /* Ocultamos todos los paneles */
        paneles.forEach(function(panel) {
            panel.classList.remove("activo");
        });

        /* Activamos la pestaña en la que hicimos clic */
        pestana.classList.add("activa");

        /* Obtenemos el número de la pestaña seleccionada */
        const numero = pestana.getAttribute("data-pestana");

        /* Buscamos el panel correspondiente y mostramos su contenido */
        document.getElementById("panel-" + numero).classList.add("activo");

    });

});
