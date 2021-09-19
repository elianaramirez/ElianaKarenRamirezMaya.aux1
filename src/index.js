//1: promedio Ricks 

function promeRicks(array) {
  let sum = 0;
  let b = array.length ;
  for (let i = 0; i < array.length; i++) {
       sum = (sum + array[i]);}
       let prom = (sum/array.length);
       if (array.length=0)
       {return prom=0}
       else
       {return prom}}

               console.log(promeRicks([96, 108, 89]))
               console.log(promeRicks([]))

               // promedio de Ricks 97.99
 //2: promedio Mortys

 function promeMortys(array) {
  let sum = 0;
  let b = array.length ;
  for (let i = 0; i < array.length; i++) {
       sum = (sum + array[i]);}
       let prom1= (sum/array.length);
       if (array.length=0)
       {return prom1=0}
       else
       {return prom1}}

               console.log(promeMortys([88, 91, 110]))

    
               console.log(promeMortys([]))

               // promedio de Mortys 96,33
               
 //2. Compare los puntajes promedio del equipo para determinar el ganador de la
//competencia, e imprimirlo en la consola. No olvides que puede haber un
//empate, así que toma en cuenta ese caso también.

if (promeMortys>promeRicks){
  console.log ("promMortys ganador");
}
else if(promeMortys<promeRicks){
  console.log ("promRicks ganador");
  }
else 
     if(promeRicks===promeMortys){
     console.log("empates");
}
//3. Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo
//solo gana si tiene una puntuación más alta que el otro equipo, y además tiene
//una puntuación de al menos 100 puntos

let requisito=100;
if (promeMortys > promeRicks && promeMortys === requisito ) {
  console.log("ganador Mortys");
}
console.log("ganador Ricks");



//4. ¡La puntuación mínima también se aplica a un empate! Entonces, un empate
//solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen
//una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo
//gana el premio.



if (promeMortys === promeRicks) {
  console.log("empates");
}
else 
if (promeRicks >= 100 && promeMortys >= 100){
    console.log("Son empates");
}
console.log("Son perdedores");


//5. Cree una arrow function 'calcAverage' para calcular el promedio de 3
//puntuaciones



const puntos = [45, 45, 22, 8]
function calcAverage(puntos){
  let suma = 0;
  for (let i=0; i<3;i++){
    suma += puntos[i];
  
  return suma / (puntos.length);
}
console.log("devuelve promedio de los 3 primeros puntos ", calcAverage(puntos));



//6. Usa la función para calcular el promedio de ambos equipos.

function calcAverage(rick){
  let sum = 0;
  for(let i=0; i< rick.length;i++){
    suma+= rick[i];
  }
  return suma / (rick.length);
}
function calcAverage(morty){
  let sum = 0;
  for(let i=0; i< morty.length;i++){
    suma+= morty[i];
  }
  return suma / (morty.length);

}

console.log("promedio de Rick:",calcAverage(rick), "promedio de Morty:",calcAverage(morty));
