var intervalo;
var numeroAtual = 0;

function contarTrabalhos() {
    var trabalho = 1;
    var texto = "";

    while (trabalho <= 12) {
        if (trabalho == 12) {
            texto = texto + trabalho + " (eu!)";
        } else {
            texto = texto + trabalho + ", ";
        }
        trabalho = trabalho + 1;
    }

    lista_trabalhos.innerHTML = "Trabalhos: " + texto;
    animarContador();
}

function animarContador() {
    numeroAtual = 0;
    clearInterval(intervalo);
    intervalo = setInterval(aumentarContador, 150);
}

function aumentarContador() {
    numeroAtual = numeroAtual + 1;
    contador_trabalhos.innerHTML = numeroAtual;

    if (numeroAtual == 12) {
        clearInterval(intervalo);
        contador_trabalhos.innerHTML = "XII";
    }
}
