var favoritado = false;

function favoritar() {
    if (favoritado == false) {
        favoritado = true;
        botao_favorito.innerHTML = "♥ Nos seus favoritos";
        botao_favorito.className = "favorito favorito-ativo";
    } else {
        favoritado = false;
        botao_favorito.innerHTML = "♡ Adicionar aos favoritos";
        botao_favorito.className = "favorito";
    }
}
