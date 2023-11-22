// let screens = window.innerWidth
//  console.log("width:", screens, "px")

//  if (screens >= 600 && screens <= 699) {
//     document.getElementById("desplegable").style.width = "10%";
//  } else if (screens >= 450 && screens <= 599) {
//     document.getElementById("desplegable").style.width = "12%";
//  } else if ( screens <= 449) {
//     document.getElementById("desplegable").style.width = "28%";
//     document.getElementById("paginaPrincipal").style.width = "85%"
//  }






var clic = 1;




function abrir() {
let screens = window.innerWidth
 console.log("width:", screens, "px")

    

    if (clic == 1 ) {
        document.getElementById("aparecer").style.translate= "0%"
        document.getElementById("aparecer").style.transition= "1s"
        document.getElementById("body").style.overflowY="hidden" 
        document.getElementById("cristal").style.display="block"



     
        

        clic = clic + 1;

    } else   {
        document.getElementById("aparecer").style.translate= "-100%"
        document.getElementById("aparecer").style.transition= "1s"
        document.getElementById("body").style.overflowY="visible"
        document.getElementById("cristal").style.display="none"

      


        clic = 1;

    } 

}