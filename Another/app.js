const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

const navLink = () =>{
	menu.addEventListener('click', ()=> {
		navbar.classList.toggle("nav-toggle");
	});
}
navLink();