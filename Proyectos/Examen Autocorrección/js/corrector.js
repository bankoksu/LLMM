var xmlDoc;
var numPreguntas = 0;
var resultados = 0;

window.onload = function () {
    leerXML();
};
/*leer documento XML*/
function leerXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            xmlDoc = this.responseXML;
            numPreguntas = xmlDoc.getElementsByTagName('pregunta').length;
            printPreguntas();
            printButton();
        }
    };
    xhttp.open("GET", "xml/preguntas.xml", true);
    xhttp.send();

}

/*imprimir preguntas del XML al HTML*/
function printPreguntas() {

    for (var i = 0; i < numPreguntas; i++) {

        var tipo = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('tipo')[0].innerHTML;

        switch (tipo) {
            case "radio":
                crearRadio(i);
                break;
            case "check":
                crearCheck(i);
                break;
            case "text":
                crearText(i);
                break;
            case "select":
                crearSelect(i);
                break;
            default:
                console.log("default");
        }
    }
}

/*crear preguntas de tipo radio*/
function crearRadio(i) {

    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("myForm");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "pregunta");
    element.appendChild(div);

    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";


    /*Mostrar imagen del XML en caso de haberla*/
    var imagen = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0];
    if (imagen){
        var img = document.createElement("img");
        img.setAttribute("src", xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0].innerHTML);
        div.appendChild(img)
    }
    div.appendChild(enunciado);
    
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var radioBut = document.createElement("input");

        radioBut.setAttribute("type", "radio");
        radioBut.setAttribute("name", i);
        radioBut.setAttribute("value", k);
        radioBut.setAttribute('id', k + "radio");
        div.appendChild(radioBut);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }


}

/*crear preguntas de tipo check*/
function crearCheck(i) {
    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("myForm");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "pregunta");
    element.appendChild(div);
    
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    /*Mostrar imagen del XML en caso de haberla*/
    var imagen = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0];
    if (imagen){
        var img = document.createElement("img");
        img.setAttribute("src", xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0].innerHTML);
        div.appendChild(img)
    }
    div.appendChild(enunciado);

    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var check = document.createElement("input");

        check.setAttribute("type", "checkbox");
        check.setAttribute("name", i);
        check.setAttribute("value", k);
        check.setAttribute('id', k + "check");
        div.appendChild(check);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }
}

/*crear preguntas de tipo text*/
function crearText(i) {
    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("myForm");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "pregunta");
    element.appendChild(div);

    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    /*Mostrar imagen del XML en caso de haberla*/
    var imagen = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0];
    if (imagen){
        var img = document.createElement("img");
        img.setAttribute("src", xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0].innerHTML);
        div.appendChild(img)
    }
    div.appendChild(enunciado);

    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var text = document.createElement("input");

        text.setAttribute("type", "text");
        text.setAttribute("name", i);
        text.setAttribute('id', i + "text");
        div.appendChild(text);

        var label = document.createElement('label');
        label.setAttribute('for', i);
        label.innerHTML = "<br>";
        div.appendChild(label);
    }
}

/*crear preguntas de tipo select*/
function crearSelect(i) {
    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("myForm");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "pregunta");
    element.appendChild(div);

    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";
    div.appendChild(enunciado);

    var select = document.createElement("select");
    select.setAttribute("id", i + "select");
    select.setAttribute("name", i);
    div.appendChild(select);

    /*Mostrar imagen del XML en caso de haberla*/
    var imagen = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0];
    if (imagen){
        var img = document.createElement("img");
        img.setAttribute("src", xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0].innerHTML);
        div.appendChild(img)
    }
    div.appendChild(enunciado);

    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var option = document.createElement("option");

        option.setAttribute("name", i);
        option.setAttribute("value", k);
        option.setAttribute('id', k + "check");
        option.innerHTML = question;
        select.appendChild(option);

        var label = document.createElement('label');
        label.setAttribute('for', i);
    }
    label.innerHTML = "<br>";

    div.appendChild(label);
}

/*revisar preguntas*/
function checkPreguntas() {
    document.getElementById("bien").innerHTML = "<h3>RESULTADOS: </h3><br/>";
    var numPreg = xmlDoc.getElementsByTagName('pregunta').length;

    for (var i = 0; i < numPreg; i++) {
        var tipo = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName("tipo")[0].innerHTML;

        if (tipo === "radio") {
                checkRadio(i);
        }
        else if (tipo === "check") {
                checkCheckbox(i);
        }
        else if (tipo === "select") {
                checkSelect(i);
        }
        else if (tipo === "text") {
            checkText(i);
        }
    }
    /*tras revisar todos los tipos de preguntas a través de un bucle, llamamos a la función correspondiente para printar los resultados tras clickar sobre el botón creado*/
    printResultados();
    alert("Revisa el examen: CORRECTAS en VERDE e INCORRECTAS en ROJO. En 25 segundos se reiniciará el examen");
}

/*corregir preguntas tipo radio*/
function checkRadio(x) {

    var radios = document.getElementsByName(x);
    var isNull = true;
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) 
        {
            var preguntaSel = radios[z].getAttribute("value");

            var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto");

            if (resp) {
                document.getElementById("div"+x).style.backgroundColor="#00cc00";
                resultados++;
            }
            else {
                document.getElementById("div"+x).style.backgroundColor="#cc0000";
                
            }

            break;
        }

        if (isNull) {
            document.getElementById("div" + x).style.backgroundColor = "#cc0000";
        }

    }
}

/*corregir preguntas tipo check*/
function checkCheckbox(x) {

    var contCorrectas = 0;
    var contSeleccionadas = 0;
    var contSelecCorrectas = 0;
    var isNull = true;
    var radios = document.getElementsByName(x);

    /*Cuenta la cantidad de respuestas que deben ser seleccionadas*/
    for (var z = 0, length = radios.length; z < length; z++) {
        var preguntaSel = radios[z].getAttribute("value");
        if (xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto")) {
            contCorrectas += 1;
        }

    }

    /*Comprobamos cuantas respuestas correctas ha seleccionado el usuario*/
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked)
        {
            var preguntaSel = radios[z].getAttribute("value");
            var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto");
            
            if (resp) {
                document.getElementById("div"+x).style.backgroundColor="#00cc00";
                resultados++;
                
            }
            else {
                document.getElementById("div"+x).style.backgroundColor="#cc0000";
            }

            break;
        }

        if (isNull) {
            document.getElementById("div" + x).style.backgroundColor = "#cc0000";
        }
    }
}

/*corregir preguntas tipo text*/
function checkText(x) {
    try {
        var userAns = document.getElementById(x + "text").value;
    } catch (e) {
    }
    var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[0].innerHTML;

    if (resp ==userAns) {
        document.getElementById("div"+x).style.backgroundColor="#00cc00";
        resultados++;
        
    }
    else {
         document.getElementById("div"+x).style.backgroundColor="#cc0000";
    }
}

/*corregir preguntas tipo select*/
function checkSelect(x) {

    var option = document.getElementsByName(x);

    for (var z = 0, length = option.length; z < length; z++) {
        if (option[z].selected)
        {
            /*Comprueba si tiene el atributo correcto = true y suma 1 punto*/
            var preguntaSel = document.getElementById(x + "select").value;
            var resp = xmlDoc.getElementsByTagName("pregunta")[x].getElementsByTagName("respuesta")[preguntaSel].getAttribute("correcto");

        if (resp) {
            document.getElementById("div"+x).style.backgroundColor="#00cc00";
            resultados++;   
        }
        else {
            document.getElementById("div"+x).style.backgroundColor="#cc0000";
        }
            break;
        }
    }
}

/*creamos un botón para obtener resultados*/
function printButton(){
    var element = document.getElementById("myForm");
    element.innerHTML = element.innerHTML + "<br/>";
    var textinp = document.createElement('button');
    textinp.setAttribute('type', "button");
    textinp.setAttribute('onclick', "checkPreguntas()");
    textinp.innerHTML= "Obtén tu calificación: ";
    element.appendChild(textinp);
    var bien = document.createElement('div');
    bien.setAttribute('id', "bien");
    element.appendChild(bien);
}

/*imprimimos los resultados obtenidos*/
function printResultados() {
    var element = document.getElementById("myForm");
    var div = document.createElement("div");
    element.appendChild(div);
    var label = document.createElement('label');
    label.innerHTML = "Tu calificación es:"+ " " + resultados + "/10" ;
    div.appendChild(label);
    resultados = 0;
    setTimeout('document.location.reload()',25000)
   
}

