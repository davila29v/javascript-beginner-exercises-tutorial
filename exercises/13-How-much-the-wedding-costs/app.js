let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let price = 0;
    // Your code here

  if (guests <= 50) {
    price = 4000;
  } 
  else if (guests > 50 && guests <= 100) {
    price = 10000;
  } 
  else if (guests > 100 && guests <= 200){
    price = 15000;
  }
  else if (guests > 200) {
    price = 20000;
  }

    return price;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
