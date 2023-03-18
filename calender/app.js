const hookedDiv = document.querySelector('.bottom')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

const arr = ["Jan", "Fab", "Mar", "Apirl"];

const app = document.createElement("p")
		app.innerHtml = "pressed"	

document.addEventListener('click', e => {
	const pressed = e.target.closest('.fa');
	if (pressed !== null) {
		hookedDiv.appendChild(app)
	}
});


