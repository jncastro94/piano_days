//create count in the database
if (localStorage.getItem("count") == null) {
	localStorage.setItem("count",0)
}

//update html to reflect database count
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}
update()

//add one to count

function plusOne() {
	localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
	update()
}

//reset

function reset(){
	if (confirm("You really didn't practice today?")){
		localStorage.setItem("count",0);
				update();
	}
}