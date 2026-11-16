function atualizarMenu() {
    if (sessionStorage.ID_USUARIO != undefined) {
        botao_entrar.href = "perfil.html";
        botao_entrar.className = "conta";
        botao_entrar.innerHTML = "<span>EU</span>Minha conta";
    }
}

atualizarMenu();
