let boton=document.getElementById("botonh")
let menu=document.getElementById("men")
let activacio=false
function activacion(){
    if(activacio==true){
        menu.style.display="none"
        activacio=false
    }
    else{
        menu.style.display="grid",animationPlayState='running'
        activacio=true
    }
}