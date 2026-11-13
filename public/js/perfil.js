// ===== PERFIL =====
// idUsuario e nomeUsuario vêm do sessao.js
// as regras (trabalhos, títulos, quizzes) vêm do jornada.js
nome_usuario.innerHTML = nomeUsuario;


// TRECHO AVANÇADO: fetch pede dados para a API.
// O primeiro .then transforma a resposta em objeto (json),
// o segundo .then recebe esse objeto pronto para usar.
fetch('/perfil/dados/' + idUsuario)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (dados) {
        mostrarCabecalho(dados);
        mostrarNumeros(dados);
        mostrarRadar(dados);
        mostrarRosca(dados);
    });

fetch('/perfil/evolucao/' + idUsuario)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (tentativas) {
        mostrarLinha(tentativas);
    });


// ----- CABEÇALHO, MINI TRABALHOS E QUIZZES -----
function mostrarCabecalho(dados) {
    var trabalhos = montarTrabalhos(dados);
    var completos = contarCompletos(trabalhos);
    var nivel = descobrirNivel(completos);

    avatar.innerHTML = montarAvatar(dados.patrono);
    titulo_usuario.innerHTML = titulos[nivel];
    texto_historias.innerHTML = dados.historias + ' de 5 histórias do Arquivo lidas';

    // a barra mostra quantos dos 12 trabalhos já foram completos
    barra_titulo.style.width = completos / 12 * 100 + '%';
    texto_titulo.innerHTML = completos + ' de 12 trabalhos completos';

    // as bolinhas com os números romanos dos trabalhos
    var html = '';
    for (var i = 0; i < trabalhos.length; i++) {
        if (trabalhos[i].atual >= trabalhos[i].meta) {
            html = html + '<span class="mini-completo">' + trabalhos[i].numero + '</span>';
        } else {
            html = html + '<span>' + trabalhos[i].numero + '</span>';
        }
    }
    mini_trabalhos.innerHTML = html;

    lista_quizzes.innerHTML = montarCartoesQuizzes(nivel, dados.patrono);
}


// ----- 4 NÚMEROS (KPIs) -----
function mostrarNumeros(dados) {
    kpi_quizzes.innerHTML = dados.quizzes;
    kpi_historias.innerHTML = dados.historias;

    // sem quiz feito, média e melhor nota ficam com "–"
    if (dados.quizzes > 0) {
        kpi_media.innerHTML = dados.media + '%';
        kpi_melhor.innerHTML = dados.melhor + '%';
    }
}


// ----- RADAR: pontos de cada deus no Teste do Patrono -----
function mostrarRadar(dados) {
    // quem não fez o teste vê o convite no lugar do gráfico
    if (dados.patrono == null) {
        area_radar.style.display = 'none';
        convite_teste.style.display = 'flex';
        return;
    }

    new Chart(grafico_radar, {
        type: 'radar',
        data: {
            labels: ['Zeus', 'Poseidon', 'Hades', 'Atena', 'Ares', 'Apolo'],
            datasets: [{
                label: 'Pontos',
                data: [dados.pontos_zeus, dados.pontos_poseidon, dados.pontos_hades,
                       dados.pontos_atena, dados.pontos_ares, dados.pontos_apolo],
                borderColor: '#c8693a',
                backgroundColor: '#c8693a44'
            }]
        },
        options: { maintainAspectRatio: false }
    });
}


// ----- ROSCA: acertos e erros -----
function mostrarRosca(dados) {
    if (dados.quizzes == 0) {
        eixo_rosca.innerHTML = 'Termine um quiz para ver seus acertos aqui.';
        return;
    }

    new Chart(grafico_rosca, {
        type: 'doughnut',
        data: {
            labels: ['Acertos', 'Erros'],
            datasets: [{
                data: [dados.acertos, dados.erros],
                backgroundColor: ['#c8693a', '#121417']
            }]
        },
        options: { maintainAspectRatio: false }
    });
}


// ----- LINHA: % de acerto nos últimos 10 quizzes -----
function mostrarLinha(tentativas) {
    if (tentativas.length == 0) {
        eixo_linha.innerHTML = 'Seus quizzes vão aparecer aqui.';
        return;
    }

    // a API manda do mais novo para o mais antigo,
    // então o for anda de trás para frente para o gráfico ficar em ordem
    var rotulos = [];
    var porcentagens = [];
    var numero = 1;
    for (var i = tentativas.length - 1; i >= 0; i--) {
        rotulos.push('Quiz ' + numero);
        porcentagens.push(tentativas[i].porcentagem);
        numero = numero + 1;
    }

    new Chart(grafico_linha, {
        type: 'line',
        data: {
            labels: rotulos,
            datasets: [{
                label: '% de acerto',
                data: porcentagens,
                borderColor: '#c8693a',
                backgroundColor: '#c8693a'
            }]
        },
        options: { maintainAspectRatio: false }
    });
}
