// ===== MENU DE CIMA (páginas públicas) =====
// Se a pessoa já entrou, o botão "Entrar" vira "Minha conta" e leva para o perfil.
if (sessionStorage.getItem('ID_USUARIO') != null) {
    botao_entrar.href = 'perfil.html';
    botao_entrar.className = 'conta';
    botao_entrar.innerHTML = '<span>EU</span>Minha conta';
}
