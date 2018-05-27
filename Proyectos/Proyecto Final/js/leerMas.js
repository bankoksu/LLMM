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
                $("#out").append( "<h1 id='" + i + "'>" + noticia.titular+ "</h1>" + "<p>" + noticia.descripcion + "</p>"  );
                $('#loading').hide();
         }); 
        }
   });
});