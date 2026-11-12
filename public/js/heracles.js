// ===== OS DOZE TRABALHOS DE HÉRACLES =====
function contarTrabalhos() {
    var trabalho = 1;
    var texto = '';

    while (trabalho <= 12) {
        if (trabalho == 12) {
            texto = texto + trabalho + ' (eu!)';
        } else {
            texto = texto + trabalho + ', ';
        }
        trabalho = trabalho + 1;
    }

    lista_trabalhos.innerHTML = 'Trabalhos: ' + texto;
    animarContador();
}


// ===== TRECHO AVANÇADO: contador animado =====
// setInterval repete uma função de tempos em tempos (aqui, a cada 150 milissegundos).
// clearInterval para a repetição quando o número chega em 12.
var intervalo;
var numeroAtual = 0;

function animarContador() {
    numeroAtual = 0;
    clearInterval(intervalo);

    intervalo = setInterval(function () {
        numeroAtual += 1;
        contador_trabalhos.innerHTML = numeroAtual;

        if (numeroAtual == 12) {
            clearInterval(intervalo);
            contador_trabalhos.innerHTML = 'XII';
        }
    }, 150);
}
