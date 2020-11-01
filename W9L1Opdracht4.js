/*var enter;

enter = prompt("Enter your number!");

var IsGetal = "";

IsGetal = IsGetal + Number.isInteger(enter);
console.log(IsGetal);

if (IsGetal == "true") {

	for(x=1; x<=enter; x++) {

		for(i=1; i<11; i++) {
			document.write((i + " x " + x + " = ") + (i * x) + "<br/>");
		}
		
		document.write("<br/>" + "<br/>");
	}	
} else alert("geen getal");




alert("Please enter a number");*/


var enter;

enter = prompt ("Enter jour number!");

// afvangen of invoer een getal is (isNaN) of de invoer is < 1 of de invoer is > 10
if (isNaN(enter) || enter <1 || enter > 10) {
	alert ("Invoer is geen getal of niet binnen het bereik van 1 - 10");

}	else {
	for (x=1; x<=enter; x++) {
		for (i=1; i<11; i++) {
			document.write((i + " x " + x + " = ") + (i * x) + "<br/>");
		}

		document.write("<br/>" + "<br/>");
	}
}