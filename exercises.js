/* 
programa que pida 2 numeros y luego diga si un
 numero es el doble que el otro
 */
//input --> 2 numeros
// output --> si uno es el doble que el otro
function isDoble (a, b){
    if(b+b === a){
        console.log(`${a} is twice as much as ${b}`);
    } else if(a+a === b) {
        console.log(`${b} is twice as much as ${a}`)
    } else {
        console.log('neither number is twice the other')
    }
 }
 isDoble(10, 20)