const cpuContainer = document.querySelector('.cpu_turno');
const cpuTitle     = document.querySelector('.cpu_title');
let selecCPU = "nada"

export const jugarCPU = () =>{

	let x = Math.ceil(Math.random()*3)

	if (x === 1) {
		cpuContainer.innerHTML = `<img class="cpu_img" src="./assets/roca.png" alt="sin_eleccion">
				<span class="cpu_span">Piedra</span>`
		cpuTitle.innerText = "La computadora elijio Piedra!"
		selecCPU = "piedra"

	} else if (x === 2) {
		cpuContainer.innerHTML = `<img class="cpu_img" src="./assets/papel.png" alt="sin_eleccion">
				<span class="cpu_span">Papel</span>`
		cpuTitle.innerText = "La computadora elijio Papel!"
		selecCPU = "papel"

	} else if (x === 3) {
		cpuContainer.innerHTML = `<img class="cpu_img" src="./assets/tijeras.png" alt="sin_eleccion">
				<span class="cpu_span">Tijera</span>`
		cpuTitle.innerText = "La computadora elijio Tijeras!"
		selecCPU = "tijera"
	}

	return selecCPU;

}