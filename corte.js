// alert("hola");
document.write("Escuela de Artes y Letras");
console.log("Martes 13");
let nombre ="ANGIE";
document.getElementById("cuadro").innerHTML=nombre;
let name = prompt("escriba su nombre: ");
alert("hola " + name);
let age =prompt("Escriba su edad: ");
let edad = Number(age) + 10;
alert ("su edad en 10 años será: " + edad); 
let menor = Number(age) -5 ;
alert ("su edad hace 5 años era: " + menor); 
let multi = Number(age) *3 ;
alert ("el triple de su edad es: " + multi); 
let mitad = Number(age) /2 ;
alert ("la mitad de su edad es: " + mitad); 
let par = Number(age) %2 ;
if( par == 0)
{
    alert ("Su edad es par"); 
}
else
{
    alert ("Su edad es impar"); 
}
if( age <= 22)
{
    alert ("Su edad es menor a 22"); 
}
else
{
    alert ("Su edad es mayor a 22"); 
}
