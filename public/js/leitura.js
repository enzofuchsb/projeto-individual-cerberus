// ===== MARCAR UMA HISTÓRIA COMO LIDA =====
// Usado nas 5 histórias do Arquivo. Cada uma tem uma chave ('persefone', 'heracles'...).
// Só funciona com login. A mesma história conta uma vez por dia.
function marcarLeitura(historia) {
    var idUsuario = sessionStorage.getItem('ID_USUARIO');

    if (idUsuario == null) {
        botao_lida.innerHTML = 'Entre na sua conta para contar a leitura';
        return;
    }

    // TRECHO AVANÇADO: fetch com POST avisa a API qual história foi lida hoje
    fetch('/historia/leitura', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            historiaServer: historia
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            botao_lida.innerHTML = '✓ Lida! Conta para os 12 Trabalhos';
        } else {
            botao_lida.innerHTML = 'Não consegui registrar. Tente de novo';
        }
    });
}
