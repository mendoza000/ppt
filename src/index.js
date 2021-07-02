import './css/normalize.css';
import './styles.css';
import { jugarCPU } from './js/defCPU';
import { jugarPlayer } from './js/defPlayer';

const piedra = document.querySelector('#btn_piedra');
const papel = document.querySelector('#btn_papel');
const tijera = document.querySelector('#btn_tijera');
const cargando = document.querySelector('.cargando');
const cargandoImg = document.querySelector('.cargando_img');
const pop = document.querySelector('.pop');
const popTitle = document.querySelector('.pop_title');
const popBtn = document.querySelector('.pop_btn');

console.log("running");

let selec = "nada";
let cum = "asd"

const jugandoCPU = async () => {
	await setTimeout(function() {
		cargando.style.left = "0"
		cargandoImg.className += " cargando_animate"
	}, 1000);

	await setTimeout(function() {
		cargando.style.left = "-100vw"
		cargandoImg.className = "cargando_img"
	}, 5000);

	await setTimeout(function() {
		cum = jugarCPU()
		console.log(cum);
	}, 6000);
}

const resultado = () => {
	pop.style.left = "0"
	if (selec === cum) {
			popTitle.innerText = "Ha quedado en tablas con la computadora 🤝"
		}else if(selec === "piedra" && cum === "papel"){
			popTitle.innerText = "Ha perdido la partida 👎"
		}else if(selec === "papel" && cum === "tijera"){
			popTitle.innerText = "Ha perdido la partida 👎"
		}else if(selec === "tijera" && cum === "piedra"){
			popTitle.innerText = "Ha perdido la partida 👎"
		}else{
			popTitle.innerText = "Ha ganado la partida, excelente 👌"
		}	
}

popBtn.addEventListener('click', function(e) {
	pop.style.left = "-100vw"
});

piedra.addEventListener('click', async function(e) {
	selec = "piedra"
	jugarPlayer(selec)
	await jugandoCPU()
	setTimeout(function() {
		resultado()
	}, 6500);
});

papel.addEventListener('click', async function(e) {
	selec = "papel"
	jugarPlayer(selec)
	await jugandoCPU()
	setTimeout(function() {
		resultado()
	}, 6500);
});

tijera.addEventListener('click', async function(e) {
	selec = "tijera"
	jugarPlayer(selec)
	await jugandoCPU()
	setTimeout(function() {
		resultado()
	}, 6500);
});