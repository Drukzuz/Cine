   class administrador{
   constructor(
        NOMBRE,
        CLAVE,
        EMAIL,
        IMAGEN,
        ESTADO,
        SALT
            ) {
    this.NOMBRE = NOMBRE;
    this.CLAVE  = CLAVE;
    this.EMAIL  = EMAIL;
    this.IMAGEN = IMAGEN;
    this.ESTADO = ESTADO;
    this.SALT   = SALT;
   }
Guardar() {  //Guarda una pelicula
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cine89.herokuapp.com/api/nuevoadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}
    
 Modificar() {  //Modifica un dato
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cine89.herokuapp.com/api/Modificapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}   
    
    Eliminar() {  //Elimina un dato

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cine89.herokuapp.com/api/Eliminapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
Seleccionartodos() {  //Selecciona todos los elementos
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cine89.herokuapp.com/api/seleccionartodos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarporfecha() {  //Busca los elementos por su fecha 

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cine89.herokuapp.com/api/seleccionarporfecha');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarporid() {  //Lama a los objetos mediante su id
	
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cine89.herokuapp.com/api/seleccionarpeliculaporid');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
    
    Seleccionarpornombre() {  //Seleciona por nombre los datos

    
    
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cine89.herokuapp.com/api/seleccionarpornombre');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
       
       Login() {  //Guarda una pelicula
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cine89.herokuapp.com/api/loginadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}

}
            
let imagenenbase64 = "";  //Guarda una imagen convirtiendola en texto
      $("#file").change(function(){
       readURL(this);
 });
    
        function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;

                        
                          
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }


             
            
        function botonguardarclick() //Funcion que ingresa los datos solicitados a la base de mongodb
            {
                var perfilinstanciado = new administrador(
                document.getElementById("name").value,
                document.getElementById("pass").value,
                document.getElementById("mail").value,
                imagenenbase64,"",""
                );
                                                        
                perfilinstanciado.Guardar().then(function(response) {
  console.log("Success!", response);
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
           
});                                       
                                                        
            }
function botoniniciar() //Funcion que ingresa los datos solicitados a la base de mongodb
            {
                var cladministradorinstanciado = new administrador(
                    "",
                    document.getElementById("pass").value,
                    document.getElementById("mail").value,
                    "",
                    "",
                    ""
                );                                    
            cladministradorinstanciado.Login().then(function(response) {
            console.log("Success!", response);
            alert("Bienvenido");
            localStorage.setItem("Usuariocl",JSON.stringify(response));
            location.href = "menu.html";
              
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
           
});                                       
                                                        
            }



function rev(){
   if(localStorage.getItem("Usuariocl")==null) {
       alert("No haz iniciado secion");
       location.href = "Log-in.html";
   }
}