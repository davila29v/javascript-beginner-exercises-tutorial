/*Exercise closely resembles 11 - consider introducing another concept here? */

//function getRandomInt(1,10)
function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(10);
  return Math.floor(Math.random() * (10 - 1 + 1) + 1); //The maximum is inclusive and the minimum is inclusive
}

console.log(getRandomInt());