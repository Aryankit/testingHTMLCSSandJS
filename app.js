//a program which prints "yayy" 50 times


function doItBro(){


var a = prompt("How many yayys? give me a number");
	for(i=1;i<=a;i++){
		function printsYayy(){
			document.getElementById("printSpace").innerHTML += "<div>"+"<p>"+i+". " + "yayy!!"+"</p>"+"</div>"
		}
	
		printsYayy();
	}
	
}





