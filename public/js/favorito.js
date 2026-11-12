// ===== BOTÃO DE FAVORITO (páginas de detalhe) =====
// Uma variável guarda se a página está nos favoritos ou não.
// Por enquanto fica só na tela; quando a API existir, isso vai ser salvo no banco.
var favoritado = false;

function favoritar() {
    if (favoritado == false) {
        favoritado = true;
        botao_favorito.innerHTML = '♥ Nos seus favoritos';
        botao_favorito.className = 'favorito favorito-ativo';
    } else {
        favoritado = false;
        botao_favorito.innerHTML = '♡ Adicionar aos favoritos';
        botao_favorito.className = 'favorito';
    }
}
