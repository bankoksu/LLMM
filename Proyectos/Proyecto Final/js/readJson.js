$.getJSON( "./json/data1.json", function( jsonObject ) {
  //en aquest punt l'objecte jsonObject correspon al fitxer
  pintar( jsonObject );
});

function pintar(json){
 $.each( json, function( i, noticia ) {
  $("#out1").append( "<h1 id='" + i + "'>" + noticia.titular+ "</h1>" + "<p>" + noticia.descripcion + "</p>"  );
 }); 
}

$.getJSON( "./json/data2.json", function( jsonObject ) {
  //en aquest punt l'objecte jsonObject correspon al fitxer
  pintar( jsonObject );
});

function pintar(json){
 $.each( json, function( i, noticia ) {
  $("#out2").append( "<h1 id='" + i + "'>" + noticia.titular+ "</h1>" + "<p>" + noticia.descripcion + "</p>"  );
 }); 
}