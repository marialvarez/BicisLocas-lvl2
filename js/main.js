function validateForm(){
    /*var mensajito = document.getElementById("mensaje");
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("input-email");
    var password = document.getElementById("input-password");
    var tipo = document.getElementById("select");
    
    var textoNombre = "Debe ingresar su nombre";
    var textoApellido = "Debe ingresar su apellido";
    var textoEmail = "Verifique su e-mail";
    var textoPassword = "La contraseña debe tener al menos 6 caracteres";
    var textoTipo = "Debes seleccionar al menos un tipo de bici";
    
    if(name.value.length==0 && lastname.value.length==0 && email.value.length==0 && password.value.length==0 && tipo.value==0) {
        mensaje("name",textoNombre);
        mensaje("lastname",textoApellido);
        mensaje("input-email",textoEmail);
        mensaje("input-password",textoPassword);
        mensaje("select",textoTipo);
    } else {
        if(name.value.length>0 && lastname.value.length>0 && email.value.length>0 && password.value.length>0 && tipo.value!=0){
            mensajito.innerHTML = "<br><h3 style='color:green'>¡Formulario completado!</h3>";    
        } else {
            mensajito.innerHTML = "";
        }
        
    }*/
    
    validateName();
    validateLastname();
    validateEmail();
    validatePassword();
    validateType();
}


function validateName(_evt){
    
    //Input
    var nombre = document.getElementById("name");
    //Creando el texto de la Caja Negra
    var textoNombre = "Debe ingresar su nombre";
    var textoNumero = "Los números no son válidos";
 
    
    if(nombre.value!=""){
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
        
        if(/([0-9])/g.test(nombre.value)){
            mensaje("name",textoNumero);
        } else {
            eliminar("name");
        }
    } else {
        mensaje("name",textoNombre);
    }    
}

function validateLastname(_evt) {
    
    //Input
    var apellido = document.getElementById("lastname");
    //Creando el texto de la Caja Negra
    var textoApellido = "Debe ingresar su apellido";
    var textoNumero = "Los números no son válidos";
    
 
    if(apellido.value!=""){
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
        if(/([0-9])/g.test(apellido.value)){
            mensaje("lastname",textoNumero)
        } else {
            eliminar("lastname");
        }
    } else {
        mensaje("lastname",textoApellido); 
    }
}

function validateEmail(_evt){
    
    //Input
    var emailX = document.getElementById("input-email");
    //Creando el texto de la Caja Negra
    var textoEmail = "Verifique su e-mail";

    if(/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(emailX.value)){
        eliminar("input-email"); 
    } else {
        if(emailX.value.length > 0){
            mensaje("input-email",textoEmail);  
        }
    }
}

function validatePassword(_evt) {
    
    //Input
    var password = document.getElementById("input-password");
    //Creando el texto de la Caja Negra
    var textoPassword = "La contraseña debe tener al menos 6 caracteres";
    
    if(/([1-6])/g.test(password.value) || (/([9]+[8]+[7]+[5]+[4])/g.test(password.value)) || password.value.length < 6) {
        mensaje("input-password",textoPassword); 
        
    } else {
        eliminar("input-password");
    }
}

function validateType(_evt) {
    
    //Input
    var tipo = document.getElementById("select");
    //Creando el texto de la Caja Negra
    var textoTipo = "Debes seleccionar al menos un tipo de bici";
    
    if(tipo.value == 0){
          mensaje("select",textoTipo);
    } else { 
        if(tipo.value == "urbana" || tipo.value == "treking" || tipo.value == "electrica" || tipo.value == "estatica"){
           eliminar("select");
        }
          
    }   
}


function mensaje(campo,texto){

    var elemento = document.getElementById(campo);
    
    //El span no existe
    if(elemento.nextSibling == null) {
        
        //Creando la Caja Negra
        var cajaNegra = document.createElement("span");
        var info = document.createTextNode(texto);
        cajaNegra.appendChild(info);
        var padre = elemento.parentNode;
        padre.appendChild(cajaNegra);  
     
    //El span si existe    
    } else { 
        
        if(elemento.nextSibling.tagName == 'SPAN'){
           
            elemento.nextSibling.innerHTML = texto;
            
        } else {
            
           elemento.parentNode.removeChild(elemento.nextSibling); 
            
            //Creando la Caja Negra
            var cajaNegra = document.createElement("span");
            var info = document.createTextNode(texto);
            cajaNegra.appendChild(info);
            var padre = elemento.parentNode;
            padre.appendChild(cajaNegra);
        }        
    }
}

function eliminar(campo){
    
    var elemento = document.getElementById(campo);
    
    if(elemento.nextSibling != null) {
        
        elemento.parentNode.removeChild(elemento.nextSibling);
    }
    
}

//Todos los campos son obligatorios, excepto los dos últimos.
//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
//Para los campos nombre y apellido la primera letra debe ser mayúscula
//Validar que el campo email tenga un formato válido. Ej: name@domain.com
//El campo password debe tener al menos 6 caracteres
//El campo password no puede ser igual a "password" ó "123456" ó "098754"
//El valor seleccionado de bicis, debe ser una de las opciones presentadas
//*NOTA: * Recomendamos que el mensaje se añada con un span ya que los estilos ya están definidos. 


