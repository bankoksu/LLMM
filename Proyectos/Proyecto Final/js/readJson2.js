$.getJSON( "./json/data2.json", function( jsonObject2 ) {
  //en aquest punt l'objecte jsonObject correspon al fitxer
  pintar( jsonObject2 );
});

function pintar(json){
 $.each( json, function( i, noticia ) {
  $("#out2").append( "<h1 id='" + i + "'>" + noticia.titular+ "</h1>" + "<p>" + noticia.descripcion + "</p>"  );
 }); 
}