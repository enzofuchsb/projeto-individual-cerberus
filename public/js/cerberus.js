// ===== MINI CERBERUS (usado em todas as páginas) =====
// O balão começa escondido para não cobrir a página.
// A cada clique no Cerberus o balão aparece com a próxima frase.
// Depois da última frase, volta para a primeira.
var falas = [
    'Ainda estou aqui. Três cabeças tornam difícil me perder.',
    'Eu tenho três cabeças, mas só um rabo.',
    'Guardo os portões do Hades há milênios.',
    'Héracles foi o único que me levou para passear.',
    'Orfeu me fez dormir com a música dele. Que vergonha.',
    'Hesíodo diz que eu tinha cinquenta cabeças. Exagero dele.'
];
var numeroFala = 0;

function falarCerberus() {
    texto_balao.innerHTML = falas[numeroFala];
    balao_cerberus.style.display = 'block';

    numeroFala = numeroFala + 1;

    if (numeroFala == falas.length) {
        numeroFala = 0;
    }
}

function fecharBalao() {
    balao_cerberus.style.display = 'none';
}
