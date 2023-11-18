var clic = 1;



function abrir() {

    if (clic == 1) {

        document.getElementById("desplegable").style.width = "24%";
        document.getElementById("desplegable").style.transition = "1s";
        document.getElementById("mantener").style.left = "1%"
        document.getElementById("letras").style.width = "78%"
        document.getElementById("letrotas").style.width = "78%"
        document.getElementById("letritas").style.width = "78%"
        document.getElementById("letrass").style.width = "78%"
        document.getElementById("letrasss").style.width = "78%"
        document.getElementById("letras").style.transition = "1s"
        document.getElementById("letrotas").style.transition = "1s"
        document.getElementById("letritas").style.transition = "1s"
        document.getElementById("letrass").style.transition = "1s"
        document.getElementById("letrasss").style.transition = "1s"

        clic = clic + 1;

    } else {

        document.getElementById("desplegable").style.width = "4%";
        document.getElementById("desplegable").style.transition = "1s";
        document.getElementById("letras").style.width = "0"
        document.getElementById("letras").style.overflow = "hidden"
        document.getElementById("letras").style.transition = "1.5s"
        document.getElementById("letrotas").style.width = "0"
        document.getElementById("letrotas").style.overflow = "hidden"
        document.getElementById("letrotas").style.transition = "1.5s"
        document.getElementById("letritas").style.width = "0"
        document.getElementById("letritas").style.overflow = "hidden"
        document.getElementById("letritas").style.transition = "1.5s"
        document.getElementById("letrass").style.width = "0"
        document.getElementById("letrass").style.overflow = "hidden"
        document.getElementById("letrass").style.transition = "1.5s"
        document.getElementById("letrasss").style.width = "0"
        document.getElementById("letrasss").style.overflow = "hidden"
        document.getElementById("letrasss").style.transition = "1.5s"

        clic = 1;

    }

}