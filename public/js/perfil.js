var trabalhos = [
    "Leão de Nemeia",
    "Hidra de Lerna",
    "Corça de Cerineia",
    "Javali de Erimanto",
    "Estábulos de Áugias",
    "Aves do Estínfalo",
    "Touro de Creta",
    "Éguas de Diomedes",
    "Cinturão de Hipólita",
    "Gado de Gerião",
    "Pomos de Ouro das Hespérides",
    "Captura de Cérbero"
];

function buscar(caminho, mostrar) {
    fetch("/historias/" + caminho, { cache: "no-store" }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (dados) {
                console.log("Dados de " + caminho + ": ", dados);
                mostrar(dados);
            });
        } else {
            console.log("Erro ao buscar " + caminho);
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function mostrarResumo(dados) {
    var lidas = dados[0].lidas;
    var total = dados[0].total;

    kpi_lidas.innerHTML = lidas;
    kpi_favoritos.innerHTML = dados[0].favoritos;

    if (dados[0].media != null) {
        kpi_media.innerHTML = dados[0].media;
    }

    var porcentagem = 0;

    if (total > 0) {
        porcentagem = Math.round(lidas / total * 100);
    }

    kpi_submundo.innerHTML = porcentagem + "%";

    mostrarTrabalhos(lidas);
}

function mostrarTrabalhos(lidas) {
    var concluidos = Math.floor(lidas / 3);

    if (concluidos > 12) {
        concluidos = 12;
    }

    var html = "";

    for (var i = 0; i < trabalhos.length; i++) {
        if (i < concluidos) {
            html = html + "<li class='trabalho trabalho-concluido'><span>" + (i + 1) + "</span>" + trabalhos[i] + "</li>";
        } else {
            html = html + "<li class='trabalho trabalho-bloqueado'><span>" + (i + 1) + "</span>" + trabalhos[i] + "</li>";
        }
    }

    lista_trabalhos.innerHTML = html;
    texto_trabalhos.innerHTML = concluidos + " de 12 trabalhos";
}

function mostrarRosca(dados) {
    var categorias = [];
    var quantidades = [];

    for (var i = 0; i < dados.length; i++) {
        categorias.push(dados[i].categoria);
        quantidades.push(dados[i].quantidade);
    }

    new Chart(document.getElementById("grafico_rosca"), {
        type: "doughnut",
        data: {
            labels: categorias,
            datasets: [{
                data: quantidades,
                backgroundColor: ["#c8693a", "#121417", "#f2b632", "#b0241b"]
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });
}

function mostrarBarras(dados) {
    var nomes = [];
    var medias = [];

    for (var i = 0; i < dados.length; i++) {
        nomes.push(dados[i].nome);
        medias.push(dados[i].media);
    }

    new Chart(document.getElementById("grafico_barras"), {
        type: "bar",
        data: {
            labels: nomes,
            datasets: [{
                label: "Média de cerberinhos",
                data: medias,
                backgroundColor: "#c8693a"
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: { min: 0, max: 5 }
            }
        }
    });
}

function mostrarFavoritos(dados) {
    if (dados.length == 0) {
        lista_favoritos.innerHTML = "<li class='texto-apagado'>Você ainda não favoritou nenhuma história.</li>";
        return;
    }

    var html = "";

    for (var i = 0; i < dados.length; i++) {
        html = html + "<li><a href='" + dados[i].pagina + "'>" + dados[i].nome + "</a></li>";
    }

    lista_favoritos.innerHTML = html;
}

validarSessao();
nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var idUsuario = sessionStorage.ID_USUARIO;
buscar("resumo/" + idUsuario, mostrarResumo);
buscar("porCategoria/" + idUsuario, mostrarRosca);
buscar("maisBemAvaliadas", mostrarBarras);
buscar("favoritos/" + idUsuario, mostrarFavoritos);
