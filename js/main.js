//Todos los campos son obligatorios, excepto los dos últimos.
//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
//Para los campos nombre y apellido la primera letra debe ser mayúscula
//Validar que el campo email tenga un formato válido. Ej: name@domain.com
//El campo password debe tener al menos 6 caracteres
//El campo password no puede ser igual a "password" ó "123456" ó "098754"
//El valor seleccionado de bicis, debe ser una de las opciones presentadas
//*NOTA: * Recomendamos que el mensaje se añada con un span ya que los estilos ya están definidos.

function mensaje(campo,texto){
    /*if(campo.nextSibling != null || campo.nextSibling == element.tagName("span")) {
        campo.nextSibling.innerHTML = texto.textContent;
    } else { }*/
    
        //Creando la Caja Negra
        var cajaNegra = document.createElement("span");
        //Insertar el nodo Texto dentro del nodo Caja Negra
        cajaNegra.appendChild(texto);
        //Crear padre
        var padre = campo.parentNode;

        var resultado = padre.appendChild(cajaNegra);
        return resultado;  

}


function validateName(_evt){
    
    //Input
    var nombre = document.getElementById("name");
    //Creando el texto de la Caja Negra
    var textoNombre = document.createTextNode("Debe ingresar su nombre");
    var textoNumero = document.createTextNode("Los números no son válidos");
    
 
    if(nombre.value==""){
       mensaje(nombre,textoNombre); 
    } else {
        if(/([0-9])/g.test(nombre.value)){
            mensaje(nombre,textoNumero);
        } else {
            nombre.parentNode.removeChild(nombre.nextSibling);
        }
        //MAYUSCULA
        var nombreArray = nombre.value.split("");
        var primeraLetra = nombreArray[0];
        var mayuscula = primeraLetra.toUpperCase();
        var espacio = false;

        for(var i=1; i<nombreArray.length; i++) {
            if(espacio){
                mayuscula += nombreArray[i].toUpperCase();
                espacio = false;
            } else {
                mayuscula += nombreArray[i];
                if(nombreArray[i] == " ")
                    espacio = true;
            }
        nombre.value = mayuscula;
        }
    }
}

function validateLastname(_evt) {
    
    //Input
    var apellido = document.getElementById("lastname");
    //Creando el texto de la Caja Negra
    var textoApellido = document.createTextNode("Debe ingresar su apellido");
    var textoNumero = document.createTextNode("Los números no son válidos");
    
 
    if(apellido.value==""){
       mensaje(apellido,textoApellido); 
    } else {
        if(/([0-9])/g.test(apellido.value)){
            mensaje(apellido,textoNumero)
        } else {
            apellido.parentNode.removeChild(apellido.nextSibling);
        }
        //MAYUSCULA
            var nombreArray = apellido.value.split("");
            var primeraLetra = nombreArray[0];
            var mayuscula = primeraLetra.toUpperCase();
            var espacio = false;

            for(var i=1; i<nombreArray.length; i++) {
                if(espacio){
                    mayuscula += nombreArray[i].toUpperCase();
                    espacio = false;
                } else {
                    mayuscula += nombreArray[i];
                    if(nombreArray[i] == " ")
                        espacio = true;
                }
            apellido.value = mayuscula;
            }
    } 
}

function validateEmail(_evt){
    
    //Input
    var email = document.getElementById("input-email");
    //Creando el texto de la Caja Negra
    var textoEmail = document.createTextNode("Verifique su e-mail");
    
    if(!/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email.value)){
        mensaje(email,textoEmail);
    } else {
        if(email.value.length>0){
            email.parentNode.removeChild(email.nextSibling);  
        }
    }
}

function validatePassword(_evt) {
    
    //Input
    var password = document.getElementById("input-password");
    //Creando el texto de la Caja Negra
    var textoPassword = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
    
    if((password.value.length < 6) ) {
       mensaje(password,textoPassword);
      } else {
       password.parentNode.removeChild(password.nextSibling);
      }
}

function validateType(_evt) {
    
    //Input
    var tipo = document.querySelector("select");
    //Creando el texto de la Caja Negra
    var textoTipo = document.createTextNode("Debes seleccionar al menos un tipo de bici");
    
    if(tipo.value == 0){
          mensaje(tipo,textoTipo);
      } else {
          tipo.parentNode.removeChild(tipo.nextSibling);
      }   
}

function validateForm(){
    /*var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("input-email");
    var password = document.getElementById("input-password");
    var type = document.querySelector("select");
    
    var textoNombre = document.createTextNode("Debe ingresar su nombre");
    var textoApellido = document.createTextNode("Debe ingresar su apellido");
    var textoEmail = document.createTextNode("Verifique su e-mail");
    var textoPassword = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
    var textoTipo = document.createTextNode("Debes seleccionar al menos un tipo de bici");
    
    if(name.value.length==0 && lastname.value.length==0 && email.value.length==0 && password.value.length==0 && type.value==0) {
        mensaje(name,textoNombre);
        mensaje(lastname,textoApellido);
        mensaje(email,textoEmail);
        mensaje(password,textoPassword);
        mensaje(type,textoTipo);
    }*/
    
    validateName();
    validateLastname();
    validateEmail();
    validatePassword();
    validateType();
}
