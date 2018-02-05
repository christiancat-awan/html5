function submit() {
	var name=document.getElementById("1").value; 
	var bday=document.getElementById("2").value;
	var Bday = new Date(bday);
	var age= ~~ ((Date.now() - Bday) / (31557600000));
	var sex=document.getElementById("3").value;

	

	var arr=[name,bday,age,sex];
	console.log(arr);
	console.log(name);
	console.log(Bday);
	console.log(age);

	var htmlContainer = "<table border='1' id='tab'>";

	for(var i = 1; i <= 1; i++) {
		htmlContainer += "<tr>";
		for(var x=0; x<=5; x++){
			htmlContainer+="<td>"+arr[x]+"</td>";
		}
		htmlContainer += "</tr>";
	}
	htmlContainer += "</table>";

	document.getElementById("table").innerHTML=htmlContainer;
}