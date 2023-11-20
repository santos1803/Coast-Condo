let screens = window.innerWidth
 console.log("width:", screens, "px")

 if (screens >= 600 && screens <= 699) {
    document.getElementById("desplegable").style.width = "10%";
 } else if (screens >= 450 && screens <= 599) {
    document.getElementById("desplegable").style.width = "12%";
 } else if ( screens <= 449) {
    document.getElementById("desplegable").style.width = "28%";
    document.getElementById("paginaPrincipal").style.width = "85%"
 }






var clic = 1;




function abrir() {
let screens = window.innerWidth
 console.log("width:", screens, "px")

    

    if (clic == 1 && screens >= 900) {

        document.getElementById("desplegable").style.width = "24%";
        document.getElementById("desplegable").style.transition = "1s";
        document.getElementById("mantener").style.left = "1%"
        document.getElementById("letras").style.width = "80%"
        document.getElementById("letrotas").style.width = "80%"
        document.getElementById("letritas").style.width = "80%"
        document.getElementById("letrass").style.width = "80%"
        document.getElementById("letrasss").style.width = "80%"
        document.getElementById("letras").style.transition = "1s"
        document.getElementById("letrotas").style.transition = "1s"
        document.getElementById("letritas").style.transition = "1s"
        document.getElementById("letrass").style.transition = "1s"
        document.getElementById("letrasss").style.transition = "1s"
        document.getElementById("flexContact").style.width = "80%"
        document.getElementById("flexContact").style.transition = "1s"
        document.getElementById("paginaPrincipal").style.filter = "grayscale(100%)"
        document.getElementById("paginaPrincipal").style.transition = "2s"
     
  
        

        clic = clic + 1;

    } else if (clic !== 1 && screens >= 900) {

        document.getElementById("desplegable").style.width = "6%";
        document.getElementById("desplegable").style.transition = "1s";
        document.getElementById("letras").style.width = "0"
        document.getElementById("letras").style.overflow = "hidden"
        document.getElementById("letras").style.transition = "1"
        document.getElementById("letrotas").style.width = "0"
        document.getElementById("letrotas").style.overflow = "hidden"
        document.getElementById("letrotas").style.transition = "1s"
        document.getElementById("letritas").style.width = "0"
        document.getElementById("letritas").style.overflow = "hidden"
        document.getElementById("letritas").style.transition = "1s"
        document.getElementById("letrass").style.width = "0"
        document.getElementById("letrass").style.overflow = "hidden"
        document.getElementById("letrass").style.transition = "1s"
        document.getElementById("letrasss").style.width = "0"
        document.getElementById("letrasss").style.overflow = "hidden"
        document.getElementById("letrasss").style.transition = "1s"
        document.getElementById("flexContact").style.width = "25%"
        document.getElementById("flexContact").style.transition = "1s"
        document.getElementById("paginaPrincipal").style.filter = "none"
        document.getElementById("paginaPrincipal").style.transition = "2s"

        clic = 1;

    } else if (clic == 1 && screens >= 700 && screens <= 899) {
    document.getElementById("desplegable").style.width = "29%";
        document.getElementById("desplegable").style.transition = "1s";
        document.getElementById("mantener").style.left = "1%"
        document.getElementById("letras").style.width = "80%"
        document.getElementById("letrotas").style.width = "80%"
        document.getElementById("letritas").style.width = "80%"
        document.getElementById("letrass").style.width = "80%"
        document.getElementById("letrasss").style.width = "80%"
        document.getElementById("letras").style.transition = "1s"
        document.getElementById("letrotas").style.transition = "1s"
        document.getElementById("letritas").style.transition = "1s"
        document.getElementById("letrass").style.transition = "1s"
        document.getElementById("letrasss").style.transition = "1s"
        document.getElementById("flexContact").style.width = "80%"
        document.getElementById("flexContact").style.transition = "1s"
        document.getElementById("paginaPrincipal").style.filter = "grayscale(100%)"
        document.getElementById("paginaPrincipal").style.transition = "2s"
     
  
        

        clic = clic + 1;

} else if (clic !== 1 && screens >= 700 && screens <= 899) {
    document.getElementById("desplegable").style.width = "8%";
        document.getElementById("desplegable").style.transition = "1s";
        document.getElementById("letras").style.width = "0"
        document.getElementById("letras").style.overflow = "hidden"
        document.getElementById("letras").style.transition = "1"
        document.getElementById("letrotas").style.width = "0"
        document.getElementById("letrotas").style.overflow = "hidden"
        document.getElementById("letrotas").style.transition = "1s"
        document.getElementById("letritas").style.width = "0"
        document.getElementById("letritas").style.overflow = "hidden"
        document.getElementById("letritas").style.transition = "1s"
        document.getElementById("letrass").style.width = "0"
        document.getElementById("letrass").style.overflow = "hidden"
        document.getElementById("letrass").style.transition = "1s"
        document.getElementById("letrasss").style.width = "0"
        document.getElementById("letrasss").style.overflow = "hidden"
        document.getElementById("letrasss").style.transition = "1s"
        document.getElementById("flexContact").style.width = "25%"
        document.getElementById("flexContact").style.transition = "1s"
        document.getElementById("paginaPrincipal").style.filter = "none"
        document.getElementById("paginaPrincipal").style.transition = "2s"
     
  
        

        clic =  1;

} else if (clic == 1  && screens >= 600  && screens <= 699) {
    document.getElementById("desplegable").style.width = "38%";
        document.getElementById("desplegable").style.transition = "1s";
        document.getElementById("mantener").style.left = "1%"
        document.getElementById("letras").style.width = "80%"
        document.getElementById("letrotas").style.width = "80%"
        document.getElementById("letritas").style.width = "80%"
        document.getElementById("letrass").style.width = "80%"
        document.getElementById("letrasss").style.width = "80%"
        document.getElementById("letras").style.transition = "1s"
        document.getElementById("letrotas").style.transition = "1s"
        document.getElementById("letritas").style.transition = "1s"
        document.getElementById("letrass").style.transition = "1s"
        document.getElementById("letrasss").style.transition = "1s"
        document.getElementById("flexContact").style.width = "80%"
        document.getElementById("flexContact").style.transition = "1s"
        document.getElementById("paginaPrincipal").style.filter = "grayscale(100%)"
        document.getElementById("paginaPrincipal").style.transition = "2s"
     
  
        

        clic = clic + 1;

} else if (clic !== 1 && screens >= 600  && screens <= 699) {
    document.getElementById("desplegable").style.width = "10%";
        document.getElementById("desplegable").style.transition = "1s";
        document.getElementById("letras").style.width = "0"
        document.getElementById("letras").style.overflow = "hidden"
        document.getElementById("letras").style.transition = "1"
        document.getElementById("letrotas").style.width = "0"
        document.getElementById("letrotas").style.overflow = "hidden"
        document.getElementById("letrotas").style.transition = "1s"
        document.getElementById("letritas").style.width = "0"
        document.getElementById("letritas").style.overflow = "hidden"
        document.getElementById("letritas").style.transition = "1s"
        document.getElementById("letrass").style.width = "0"
        document.getElementById("letrass").style.overflow = "hidden"
        document.getElementById("letrass").style.transition = "1s"
        document.getElementById("letrasss").style.width = "0"
        document.getElementById("letrasss").style.overflow = "hidden"
        document.getElementById("letrasss").style.transition = "1s"
        document.getElementById("flexContact").style.width = "25%"
        document.getElementById("flexContact").style.transition = "1s"
        document.getElementById("paginaPrincipal").style.filter = "none"
        document.getElementById("paginaPrincipal").style.transition = "2s"
     
  
        

        clic =  1;

} else if (clic == 1 && screens >= 450  && screens <= 599) {
    document.getElementById("desplegable").style.width = "58%";
        document.getElementById("desplegable").style.transition = ".5s";
        document.getElementById("mantener").style.left = "1%"
        document.getElementById("letras").style.width = "80%"
        document.getElementById("letrotas").style.width = "80%"
        document.getElementById("letritas").style.width = "80%"
        document.getElementById("letrass").style.width = "80%"
        document.getElementById("letrasss").style.width = "80%"
        document.getElementById("letras").style.transition = ".5s"
        document.getElementById("letrotas").style.transition = ".5s"
        document.getElementById("letritas").style.transition = ".5s"
        document.getElementById("letrass").style.transition = ".5s"
        document.getElementById("letrasss").style.transition = ".5s"
        document.getElementById("flexContact").style.width = "80%"
        document.getElementById("flexContact").style.transition = ".5s"
        document.getElementById("paginaPrincipal").style.filter = "grayscale(100%)"
        document.getElementById("paginaPrincipal").style.width = "60%"
        document.getElementById("paginaPrincipal").style.transition = ".5s"
   
     
  
        

        clic = clic + 1;

} else if (clic !== 1 && screens >= 450  && screens <= 599) {
    document.getElementById("desplegable").style.width = "12%";
        document.getElementById("desplegable").style.transition = ".5s";
        document.getElementById("letras").style.width = "0"
        document.getElementById("letras").style.overflow = "hidden"
        document.getElementById("letras").style.transition = ".5s"
        document.getElementById("letrotas").style.width = "0"
        document.getElementById("letrotas").style.overflow = "hidden"
        document.getElementById("letrotas").style.transition = ".5s"
        document.getElementById("letritas").style.width = "0"
        document.getElementById("letritas").style.overflow = "hidden"
        document.getElementById("letritas").style.transition = ".5s"
        document.getElementById("letrass").style.width = "0"
        document.getElementById("letrass").style.overflow = "hidden"
        document.getElementById("letrass").style.transition = ".5s"
        document.getElementById("letrasss").style.width = "0"
        document.getElementById("letrasss").style.overflow = "hidden"
        document.getElementById("letrasss").style.transition = ".5s"
        document.getElementById("flexContact").style.width = "25%"
        document.getElementById("flexContact").style.transition = ".5s"
        document.getElementById("paginaPrincipal").style.filter = "none"
         document.getElementById("paginaPrincipal").style.width = "100%"
        document.getElementById("paginaPrincipal").style.transition = ".5s"
       
     
  
        

        clic =  1;

} else if (clic == 1  && screens <= 449) {
    document.getElementById("desplegable").style.width = "65%";
        document.getElementById("desplegable").style.transition = ".5s";
        document.getElementById("mantener").style.left = "1%"
        document.getElementById("letras").style.width = "80%"
        document.getElementById("letrotas").style.width = "80%"
        document.getElementById("letritas").style.width = "80%"
        document.getElementById("letrass").style.width = "80%"
        document.getElementById("letrasss").style.width = "80%"
        document.getElementById("letras").style.transition = ".5s"
        document.getElementById("letrotas").style.transition = ".5s"
        document.getElementById("letritas").style.transition = ".5s"
        document.getElementById("letrass").style.transition = ".5s"
        document.getElementById("letrasss").style.transition = ".5s"
        document.getElementById("flexContact").style.width = "80%"
        document.getElementById("flexContact").style.transition = ".5s"
        document.getElementById("paginaPrincipal").style.filter = "grayscale(100%)"
        document.getElementById("paginaPrincipal").style.width = "50%"
        document.getElementById("paginaPrincipal").style.transition = ".5s"
   
     
  
        

        clic = clic + 1;

} else if (clic !== 1 && screens <= 449) {
    document.getElementById("desplegable").style.width = "28%";
        document.getElementById("desplegable").style.transition = ".5s";
        document.getElementById("letras").style.width = "0"
        document.getElementById("letras").style.overflow = "hidden"
        document.getElementById("letras").style.transition = ".5s"
        document.getElementById("letrotas").style.width = "0"
        document.getElementById("letrotas").style.overflow = "hidden"
        document.getElementById("letrotas").style.transition = ".5s"
        document.getElementById("letritas").style.width = "0"
        document.getElementById("letritas").style.overflow = "hidden"
        document.getElementById("letritas").style.transition = ".5s"
        document.getElementById("letrass").style.width = "0"
        document.getElementById("letrass").style.overflow = "hidden"
        document.getElementById("letrass").style.transition = ".5s"
        document.getElementById("letrasss").style.width = "0"
        document.getElementById("letrasss").style.overflow = "hidden"
        document.getElementById("letrasss").style.transition = ".5s"
        document.getElementById("flexContact").style.width = "25%"
        document.getElementById("flexContact").style.transition = ".5s"
        document.getElementById("paginaPrincipal").style.filter = "none"
         document.getElementById("paginaPrincipal").style.width = "85%"
        document.getElementById("paginaPrincipal").style.transition = ".5s"
       
     
  
        

        clic =  1;

}

}