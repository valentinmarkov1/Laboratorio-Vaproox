const miArray = ["Amoxidal = 150$" , "Bronax = 300$" , "Ibuprofeno = 550$",];
console.log ("Longitud: " + miArray.length);
alert ("Precio de nuestros Medicamentos")

for (let i=0; i<miArray.length; i++) {
    alert(miArray[i])

}
var array = [{ nombre: "Ibuprofeno", precio: 500 }, { nombre: "Amoxidal", precio: 150 }, { nombre: "Bronax", precio: 300 }];

var sumatoria = 0;

for(let j = 0; j < array.length; j++){
sumatoria+= array[j].precio;
}
console.log("Monto total: ", sumatoria);
alert(sumatoria);