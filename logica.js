function validar() {
    let checkboxp=document.getElementById ("p").checked;
    console.log(checkboxp);
    let checkboxq=document.getElementById ("q").checked;
    console.log(checkboxq);
    let resultado="P & Q es: "+ (checkboxp&&checkboxq)+"<br>";
    resultado=resultado+"P or Q es: "+ (checkboxp||checkboxq)+"<br>";
    resultado=resultado+"negacion de P es: "+ (!checkboxp)+"<br>";
    resultado=resultado+"negacion de q es: "+ (!checkboxq)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;

}