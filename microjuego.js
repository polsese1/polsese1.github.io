let numero = Math.floor(Math.random()*100)+1;
let contador = 0;
let maxIntentos = 10;

function compara_numero () {
    let mi_numero_input = document.getElementById("campo-numero");
    let mi_numero = mi_numero_input.value;
    let resultado = document.getElementById("resultado");
    let submit_input = document.getElementById("field-submit");
    
    mi_numero_input.classList.remove("input-error");
    
    if (mi_numero < 1 || mi_numero > 100) {
        mi_numero_input.value = " ";
    } else {
        contador++;
    }
	
    submit_input.value = "Adivina! (" + contador + ")";
    
    if (contador > maxIntentos) {
        submit_input.disabled = true;
        resultado.innerHTML = "<em class='error'><strong>¡Juego terminado!</strong> Se te acabaron los intentos.</em>";
    }
    
    if (mi_numero > numero) {
        resultado.innerHTML = "<em class='error'>El número es más pequeño que " + mi_numero + "</em>";
        mi_numero_input.classList.add("input-error");
    } else if (mi_numero < numero) {
        resultado.innerHTML = "<em class='error'>El número a adivinar es más grande que " + mi_numero + "</em>";
        mi_numero_input.classList.add("input-error");
    } else {
        resultado.innerHTML = "<em class='you-win'>¡Felicidades! Has adivinado, el número era " + mi_numero + "!</em>";
        mi_numero_input.classList.remove("input-error");
    }
    
    mi_numero_input.value = "";
    mi_numero_input.focus();
}