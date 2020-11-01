var a = 0;
var b = 1;
result = b;


function bereken (i) {
	result = a+b;
	a=b;
	b=result;
	return (result);
}

document.write(result + "<br/>");

for(i=1; i<20; i++){
	bereken(i);
	document.write(result + "<br/>");
}

