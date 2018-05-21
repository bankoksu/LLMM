//Cargar json como objeto
$.getJSON( "./json/data1.json", function( jsonObject ) {
//En este punto el objeto jsonObject corresponde al fichero
  pintar( jsonObject );
});

// Pinta json en html 
function pintar(json){
 $.each( json, function( i, noticia ) {
  $("#out").append( "<h1 id='" + i + "'>" + noticia.titular+ "</h1>" + "<p>" + noticia.descripcion + "</p>"  );
 }); 
}

