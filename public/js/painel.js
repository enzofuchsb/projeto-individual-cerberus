// ===== PAINEL =====
// Lê o nome salvo no cadastro (veja o conta.js).
// Se não tiver nome salvo, o Cerberus chama a pessoa de "viajante".
var nomeSalvo = localStorage.getItem('nome');

if (nomeSalvo != null && nomeSalvo != '') {
    nome_viajante.innerHTML = nomeSalvo;
}


function sair() {
    localStorage.removeItem('nome');
    window.location.href = 'index.html';
}
