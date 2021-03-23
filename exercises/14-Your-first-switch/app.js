function getColor(selection)
{
	switch(colorname){
        case "red":
        case "green":
        case "blue":
            return true;
        break;
	    default:
	    	 return false; //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname.tolowercase);

if(isAvailable)
	console.log('Good news! That color is available');
else 
    console.log('We are sorry, that color is not available');
    
    //lo consulte con los companeros y la logica esta bien, es un tema del ejercicio que puedo revisar talvez con algun TA
    //continuo con los demas ejercicios 
