var tentativas = 0;

var historias = [
    { nome: "Aqueronte", categoria: "lugares", pagina: "aqueronte.html", imagem: "img/lugares/aqueronte.webp", resumo: "Rio real do Épiro. No mito, um dos rios do Submundo, cruzado na barca de Caronte." },
    { nome: "Aquiles", categoria: "herois", pagina: "aquiles.html", imagem: "img/herois/aquiles.webp", resumo: "Filho de Peleu e Tétis, o maior guerreiro grego em Troia." },
    { nome: "Atalanta", categoria: "herois", pagina: "atalanta.html", imagem: "img/herois/atalanta.webp", resumo: "Caçadora veloz que participou da caça ao javali de Cálidon." },
    { nome: "Atena", categoria: "deuses", pagina: "atena.html", imagem: "img/deuses/atena.webp", resumo: "Deusa da sabedoria e da estratégia." },
    { nome: "Atenas", categoria: "lugares", pagina: "atenas.html", imagem: "img/lugares/atenas.webp", resumo: "Cidade de Atena, que venceu Poseidon na disputa pela Ática." },
    { nome: "Belerofonte", categoria: "herois", pagina: "belerofonte.html", imagem: "img/herois/belerofonte.webp", resumo: "Montado em Pégaso, matou a Quimera." },
    { nome: "Caos", categoria: "deuses", pagina: "caos.html", imagem: "img/deuses/caos.webp", resumo: "O vazio que existia antes de tudo. Dele nasceram a Escuridão e a Noite." },
    { nome: "Cérbero", categoria: "criaturas", pagina: "cerberus.html", imagem: "img/criaturas/cerbero.webp", resumo: "Cão que guarda o Submundo. Hesíodo fala em cinquenta cabeças; a maioria dos autores, em três." },
    { nome: "Cnossos", categoria: "lugares", pagina: "cnossos.html", imagem: "img/lugares/cnossos.webp", resumo: "Cidade do rei Minos, em Creta, segundo Homero." },
    { nome: "Cronos", categoria: "deuses", pagina: "cronos.html", imagem: "img/deuses/cronos.webp", resumo: "Titã que reinou antes de Zeus." },
    { nome: "Delfos", categoria: "lugares", pagina: "delfos.html", imagem: "img/lugares/delfos.webp", resumo: "Santuário do oráculo de Apolo, onde falava a Pítia." },
    { nome: "Deméter", categoria: "deuses", pagina: "demeter.html", imagem: "img/deuses/demeter.webp", resumo: "Deusa das colheitas e da terra cultivada." },
    { nome: "Gaia", categoria: "deuses", pagina: "gaia.html", imagem: "img/deuses/gaia.webp", resumo: "A Terra, mãe de todos os seres." },
    { nome: "Hades", categoria: "deuses", pagina: "hades.html", imagem: "img/deuses/hades.webp", resumo: "Soberano justo do mundo dos mortos." },
    { nome: "Hera", categoria: "deuses", pagina: "hera.html", imagem: "img/deuses/hera.webp", resumo: "Rainha dos deuses e guardiã do matrimônio." },
    { nome: "Héracles", categoria: "herois", pagina: "heracles.html", imagem: "img/herois/heracles.webp", resumo: "Filho de Zeus e Alcmena, cumpriu os doze trabalhos. No último, me levou do Submundo." },
    { nome: "Ítaca", categoria: "lugares", pagina: "itaca.html", imagem: "img/lugares/itaca.webp", resumo: "Ilha de Odisseu e Penélope. Se é a mesma Ítaca de hoje, ainda se discute." },
    { nome: "Jasão", categoria: "herois", pagina: "jasao.html", imagem: "img/herois/jasao.webp", resumo: "Liderou os Argonautas na busca pelo Velocino de Ouro." },
    { nome: "Medusa", categoria: "criaturas", pagina: "medusa.html", imagem: "img/criaturas/medusa.webp", resumo: "A única Górgona mortal. Quem olhava para ela virava pedra." },
    { nome: "Micenas", categoria: "lugares", pagina: "micenas.html", imagem: "img/lugares/micenas.webp", resumo: "Cidade de Agamêmnon, líder dos gregos na Guerra de Troia." },
    { nome: "Necromanteion", categoria: "lugares", pagina: "necromanteion.html", imagem: "img/lugares/necromanteion.webp", resumo: "Oráculo dos mortos perto do Aqueronte, citado por Heródoto. Quais ruínas são dele ainda é debatido." },
    { nome: "Odisseu", categoria: "herois", pagina: "odisseu.html", imagem: "img/herois/odisseu.webp", resumo: "Rei de Ítaca. Levou dez anos para voltar para casa depois da guerra." },
    { nome: "Monte Olimpo", categoria: "lugares", pagina: "olimpo.html", imagem: "img/lugares/olimpo.webp", resumo: "A montanha mais alta da Grécia, morada dos deuses olimpianos." },
    { nome: "Orfeu", categoria: "herois", pagina: "orfeu.html", imagem: "img/herois/orfeu.webp", resumo: "Músico que desceu ao Submundo para buscar Eurídice. Até eu parei para ouvir." },
    { nome: "Perséfone", categoria: "deuses", pagina: "persefone.html", imagem: "img/deuses/persefone.webp", resumo: "Rainha do Submundo, esposa de Hades." },
    { nome: "Perseu", categoria: "herois", pagina: "perseu.html", imagem: "img/herois/perseu.webp", resumo: "Filho de Zeus e Dânae, cortou a cabeça da Medusa." },
    { nome: "Poseidon", categoria: "deuses", pagina: "poseidon.html", imagem: "img/deuses/poseidon.webp", resumo: "Deus do mar, dos terremotos e dos cavalos." },
    { nome: "Teseu", categoria: "herois", pagina: "teseu.html", imagem: "img/herois/teseu.webp", resumo: "Herói de Atenas que matou o Minotauro com a ajuda de Ariadne." },
    { nome: "Troia", categoria: "lugares", pagina: "troia.html", imagem: "img/lugares/troia.webp", resumo: "Cidade do rei Príamo, cercada pelos gregos por dez anos." },
    { nome: "Zeus", categoria: "deuses", pagina: "zeus.html", imagem: "img/deuses/zeus.webp", resumo: "Senhor dos céus e do trovão." },
    { nome: "Minotauro", categoria: "criaturas", pagina: "minotauro.html", imagem: "img/criaturas/minotauro.webp", resumo: "Metade homem, metade touro, vivia no Labirinto de Creta." },
    { nome: "Quimera", categoria: "criaturas", pagina: "quimera.html", imagem: "img/criaturas/quimera.webp", resumo: "Cuspia fogo e tinha partes de leão, cabra e serpente." },
    { nome: "Esfinge", categoria: "criaturas", pagina: "esfinge.html", imagem: "img/criaturas/esfinge.webp", resumo: "Propunha um enigma em Tebas até Édipo resolvê-lo." },
    { nome: "Centauro", categoria: "criaturas", pagina: "centauro.html", imagem: "img/criaturas/centauro.webp", resumo: "Metade homem, metade cavalo. Quíron, o mais sábio deles, educou Aquiles." },
    { nome: "Hidra de Lerna", categoria: "criaturas", pagina: "hidra.html", imagem: "img/criaturas/hidra.webp", resumo: "Serpente de muitas cabeças vencida por Héracles no segundo trabalho." },
    { nome: "Sereia", categoria: "criaturas", pagina: "sereia.html", imagem: "img/criaturas/sereia.webp", resumo: "Na arte grega, mulher com corpo de pássaro. Seu canto atraía marinheiros." },
    { nome: "Ciclope", categoria: "criaturas", pagina: "ciclope.html", imagem: "img/criaturas/ciclope.webp", resumo: "Gigante de um olho só. Polifemo prendeu Odisseu em sua caverna." }
];

var frases = [
    "Nenhuma alma passa sem que eu saiba <em>seu nome.</em>",
    "Três cabeças, <em>mil histórias</em> para contar.",
    "Do Olimpo ao Tártaro, <em>eu conheço o caminho.</em>"
];

function responder(resposta) {
    tentativas = tentativas + 1;

    if (resposta == "Poseidon" && tentativas == 1) {
        mensagem_desafio.innerHTML = "Acertou de primeira! Poseidon governa os mares.";
    } else if (resposta == "Poseidon") {
        mensagem_desafio.innerHTML = "Acertou depois de " + tentativas + " tentativas.";
    } else if (resposta == "Zeus") {
        mensagem_desafio.innerHTML = "Errado. Zeus reina no céu, não no mar.";
    } else {
        mensagem_desafio.innerHTML = "Errado. " + resposta + " não manda nas águas.";
    }
}

function atravessar() {
    var nomeVar = input_nome.value;

    if (nomeVar == "") {
        mensagem_portao.innerHTML = "Nenhuma alma passa sem dizer seu nome.";
    } else {
        var uivos = "";

        for (var cabeca = 1; cabeca <= 3; cabeca++) {
            uivos = uivos + "Auuu! ";
        }

        mensagem_portao.innerHTML = uivos + "Bem-vindo, " + nomeVar + ". O portão está aberto.";
    }
}

function sortearFrase() {
    var sorteio = Math.floor(Math.random() * frases.length);
    titulo_hero.innerHTML = frases[sorteio];
}

function esconderConvite() {
    if (sessionStorage.ID_USUARIO != undefined) {
        bloco_login.style.display = "none";
    }
}

function mostrarHistoriaDoDia() {
    var diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var hoje = new Date();

    var diaDoAno = hoje.getDate();

    for (var mes = 0; mes < hoje.getMonth(); mes++) {
        diaDoAno = diaDoAno + diasPorMes[mes];
    }

    var historia = historias[diaDoAno % historias.length];

    var categoriaTexto = "";

    if (historia.categoria == "deuses") {
        categoriaTexto = "DEUSES";
    } else if (historia.categoria == "herois") {
        categoriaTexto = "HERÓIS";
    } else if (historia.categoria == "criaturas") {
        categoriaTexto = "CRIATURAS";
    } else {
        categoriaTexto = "LUGARES";
    }

    historia_dia_imagem.src = historia.imagem;
    historia_dia_imagem.alt = historia.nome;
    historia_dia_categoria.innerHTML = categoriaTexto;
    historia_dia_nome.innerHTML = historia.nome;
    historia_dia_resumo.innerHTML = historia.resumo;
    historia_dia_link.href = historia.pagina;
}

sortearFrase();
esconderConvite();
mostrarHistoriaDoDia();
