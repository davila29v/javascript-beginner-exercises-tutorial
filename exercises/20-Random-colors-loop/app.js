function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(min, max) {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (4 - 1 + 1) + 1); //The maximum is inclusive and the minimum is inclusive
}

console.log(getAllStudentColors());
	//your loop here
}

var exampleColor = getColor(1);