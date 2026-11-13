// ===== SESSÃO (usado nas páginas de dentro do perfil) =====
// O login guarda o ID e o nome no sessionStorage.
// Se não tiver ID, a pessoa não entrou: volta para o login.
var idUsuario = sessionStorage.getItem('ID_USUARIO');
var nomeUsuario = sessionStorage.getItem('NOME_USUARIO');

if (idUsuario == null) {
    window.location.href = 'login.html';
}

function sair() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}
