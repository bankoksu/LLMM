$.getJSON( "./json/data1.json", function( jsonObject ) {
  //en aquest punt l'objecte jsonObject correspon al fitxer
  pintar( jsonObject );
});

function pintar(json){
 $.each( json, function( i, noticia ) {
  $("#out").append( "<h1 id='" + i + "'>" + noticia.titular+ "</h1>" + "<p>" + noticia.descripcion + "</p>"  );
 }); 
}

