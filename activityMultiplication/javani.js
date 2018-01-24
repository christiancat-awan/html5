function resultni(){
	 
  var col = parseInt(document.getElementById("col").value);
  console.log(col);
  var row = parseInt(document.getElementById("row").value);
  console.log(row);
  var bgcolor = document.getElementById("colorbg").value;
  var txtcolor = document.getElementById("colort").value;
  
  
  var htmlContainer = "<table border='1' id='tab'>";
  
  for (var i = 1; i <= row; i++){ 
    htmlContainer += "<tr>";
    for (var x = 1; x <= col; x++) {
      htmlContainer += "<td id='tab1'>"+ (i*x) + "</td>";
    }
    
    htmlContainer += "</tr>";
  }
  
  htmlContainer += "</table>";
  
  document.getElementById("multiTable").innerHTML = htmlContainer;
  document.getElementById("tab").style.backgroundColor = bgcolor;
  document.getElementById("tab").style.color = txtcolor;
}

function bgcolor(){
	var color=document.getElementById("colorbg").value;

	document.getElementById("tab").style.backgroundColor = color;
}

function tcolor(){
	var color=document.getElementById("colort").value;

	document.getElementById("tab").style.color = color;
}

