import './css/normalize.css';
import './styles.css';
import { jugarCPU } from './js/defCPU';
import { jugarPlayer } from './js/defPlayer';

const piedra = document.querySelector('#btn_piedra');
const papel = document.querySelector('#btn_papel');
const tijera = document.querySelector('#btn_tijera');
const cargando = document.querySelector('.cargando');
const cargandoImg = document.querySelector('.cargando_img');

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
	if (selec === cum) {
			alert("Tablas")
		}else if(selec === "piedra" && cum === "papel"){
			alert("Perdio")
		}else if(selec === "papel" && cum === "tijera"){
			alert("Perdio")
		}else if(selec === "tijera" && cum === "piedra"){
			alert("Perdio")
		}else{
			alert("Gano")
		}	
}

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
	await jugarPlayer(selec)
	setTimeout(function() {
		resultado()
	}, 6500);
	
});

tijera.addEventListener('click', async function(e) {
	selec = "tijera"
	await jugarPlayer(selec)
	setTimeout(function() {
		resultado()
	}, 6500);
	
});