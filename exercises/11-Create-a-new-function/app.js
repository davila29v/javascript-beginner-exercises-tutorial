/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// solucion del demo:
// function generateRandom(){
//     return Math.floor(Math.random() * 10);
// }
// console.log(generateRandom())



// Declare your function here
function getRandomInt()
{
var randomNumber = Math.floor((Math.random() * 9));
return randomNumber	
}

console.log(getRandomInt());