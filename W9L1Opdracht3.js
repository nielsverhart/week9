var popupNaam;
var popupAge;


function print (prompt){
 popupNaam = prompt("Typ hier je naam!");
 popupAge = prompt ("Typ hier je leeftijd!");

}


var stop = false;

do {
	print(prompt);

	if (popupNaam == "stop") {
		stop = true
	} else alert("Hey "+popupNaam+ ", leuk dat je er bent. Jij bent " +popupAge+ " jaren oud");

} while (stop == false);

