// Selectors
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

// Events
burger.addEventListener('click', openNav);

// Functions
function openNav(e){
	nav.classList.toggle('open-nav');

	// Turn Burger Lines into an X
	burger.classList.toggle('close-burger');
}