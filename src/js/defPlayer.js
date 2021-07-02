const piedra = document.querySelector('#btn_piedra');
const papel = document.querySelector('#btn_papel');
const tijera = document.querySelector('#btn_tijera');

export const jugarPlayer = (elem) => {
	if (elem === "piedra") {
		papel.disabled = true
		papel.style.opacity = "0.5"
		papel.className = ""

		tijera.disabled = true
		tijera.style.opacity = "0.5"
		tijera.className = "btn_tijeras"

		piedra.disabled = true
	}
	else if (elem === "papel") {
		piedra.disabled = true
		piedra.style.opacity = "0.5"
		piedra.className = ""

		tijera.disabled = true
		tijera.style.opacity = "0.5"
		tijera.className = "btn_tijeras"

		papel.disabled = true
	}
	else if (elem === "tijera") {
		piedra.disabled = true
		piedra.style.opacity = "0.5"
		piedra.className = ""

		papel.disabled = true
		papel.style.opacity = "0.5"
		papel.className = ""

		tijera.disabled = true
	}

}