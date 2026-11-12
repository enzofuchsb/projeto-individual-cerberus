// ===== PERGUNTA NO FIM DA HISTÓRIA =====
function responderLeitura(resposta) {
    if (resposta == 'Hélio') {
        mensagem_leitura.innerHTML = 'Isso! O Sol vê tudo, e foi ele quem contou a verdade a Deméter.';
    } else if (resposta == 'Zeus') {
        mensagem_leitura.innerHTML = 'Não. Zeus sabia de tudo, mas foi ele quem permitiu o rapto.';
    } else {
        mensagem_leitura.innerHTML = 'Não. ' + resposta + ' só aparece depois, para buscar Perséfone.';
    }
}
