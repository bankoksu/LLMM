$(document).ready(function() {
    var win = $(window);
    var parar = 0;

    // Cada vez que el usuario se desplaza
    win.scroll(function() {
        // Comprobar si es el final del documento
        if ($(document).height() - win.height() == win.scrollTop() && parar == 0) {
            $('#loading').show();
        //Función para cargar fichero JSON
            $.getJSON( "../json/data1.json", function( jsonObject ) {
        //En este punto el objeto jsonObject corresponde al fichero
          pintar( jsonObject );
        });
        // Pintamos los ficheros json en html 
        function pintar(json){
         $.each( json, function( i, noticia ) {
          $("#out").append( "<h2 id='" + i + "'>" + noticia.titular+ "</h2>" + "<p>" + "<img class='img-fluid float-left img-thumbnail mr-4' src='" + noticia.imagen + "'>" + noticia.descripcion + "</p>" + "<div class='mb-1 text-muted'>" + noticia.datetime + "</div>");
          parar = parar + 1;
          $('#loading').hide();
         }); 
        }
        }
    });
});
