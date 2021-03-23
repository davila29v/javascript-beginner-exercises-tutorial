var total = prompt('How many km are left to go?');

// Your code below:
function testNum () {
  let result;
  if (total <= 50) {
    result = "I'm parking. I'll see you right now";
  } 
  else if (total > 50 && total <= 100) {
    result = "We'll be there in 5 minutes";
  } 
  else if (total > 100) {
    result = "We still have a bit of driving left to go";
  }

  return result;
}

console.log(testNum(total));
// expected output: "NOT positive"

