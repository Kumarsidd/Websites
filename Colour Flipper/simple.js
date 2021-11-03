const colors = ["violet", "indigo", "blue", "green", "yellow", "orange",  "red"];
const btn = document.getElementById("btn");
const color = document.querySelector(".colour");

btn.addEventListener('click', function(){
	let randomNumber = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});