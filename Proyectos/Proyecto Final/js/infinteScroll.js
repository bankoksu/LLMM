$(document).ready(function() {
    var win = $(window);

    // Cada vez que el usuario se desplaza
    win.scroll(function() {
        // Comprobar si es el final del documento
        if ($(document).height() - win.height() == win.scrollTop()) {
            $('#loading').show();
        //Función para cargar fichero JSON
            $.getJSON( "./json/data1.json", function( jsonObject ) {
        //En este punto el objeto jsonObject corresponde al fichero
          pintar( jsonObject );
        });

        //Cargamos el segundo json como objeto
        $.getJSON( "./json/data2.json", function( jsonObject ) {
        //En este punto el objeto jsonObject corresponde al fichero
          pintar( jsonObject );
        });

        // Pintamos los ficheros json en html 
        function pintar(json){
         $.each( json, function( i, noticia ) {
          $("#out").append( "<h1 id='" + i + "'>" + noticia.titular+ "</h1>" + "<p>" + noticia.descripcion + "</p>"  );
          win = null;
          $('#loading').hide();
         }); 
        }
        }
    });
});
