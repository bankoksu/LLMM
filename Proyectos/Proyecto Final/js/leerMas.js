$(document).ready(function(){ 
   $('#leerMas').on('click',function(){
        //Cargamos el json como objeto
        $('#leerMas').hide();
        $('#loading').show();
        $.getJSON( "../json/data2.json", function( jsonObject ) {
        //En este punto el objeto jsonObject corresponde al fichero
          pintar( jsonObject );
        });

        function pintar(json){
         $.each( json, function( i, noticia ) {
          $("#out").append( "<h2 id='" + i + "'>" + noticia.titular+ "</h2>" + "<p>" + "<img class='img-fluid float-left img-thumbnail mr-4' src='" + noticia.imagen + "'>" + noticia.descripcion + "</p>" + "<div class='mb-1 text-muted'>" + noticia.datetime + "</div>");
          $('#loading').hide();
         }); 
        }
   });
});