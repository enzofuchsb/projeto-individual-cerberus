var bancoQuizzes = [

    {
        chave: "olimpianos",
        nome: "Olimpianos",
        tituloHistoria: "Os deuses do Olimpo",
        historia: [
            "No alto do Monte Olimpo morava a família de deuses mais famosa da Grécia. O chefe de todos era Zeus, o rei dos deuses, que governava o céu e lançava raios quando ficava bravo.",
            "Ao lado dele estava Hera, sua esposa e rainha do Olimpo. O irmão de Zeus, Poseidon, mandava nos mares e carregava um tridente, uma lança de três pontas.",
            "Afrodite era a deusa do amor e da beleza. Hermes era o mensageiro dos deuses: com suas sandálias com asas, levava recados mais rápido que o vento.",
            "Os gêmeos Apolo e Ártemis também moravam lá. Apolo era o deus do sol e da música, e Ártemis, a deusa da caça, vivia nas florestas com seu arco e flechas."
        ],
        perguntas: [
            "Quem era o rei dos deuses?",
            "O que Poseidon carregava?",
            "Quem era a deusa do amor e da beleza?",
            "Qual deus era o mensageiro, com sandálias com asas?",
            "Quem era a deusa da caça, irmã gêmea de Apolo?"
        ],
        opcoes: [
            ["Zeus", "Hermes", "Apolo", "Poseidon"],
            ["Um arco", "Um tridente", "Uma espada", "Um escudo"],
            ["Hera", "Ártemis", "Afrodite", "Atena"],
            ["Apolo", "Zeus", "Poseidon", "Hermes"],
            ["Ártemis", "Hera", "Afrodite", "Atena"]
        ],
        certas: [0, 1, 2, 3, 0],
        explicacoes: [
            "Zeus governava o céu e lançava raios.",
            "O tridente é uma lança de três pontas, o símbolo de Poseidon.",
            "Afrodite era a deusa do amor e da beleza.",
            "Hermes levava os recados dos deuses com suas sandálias com asas.",
            "Ártemis vivia nas florestas com seu arco e flechas."
        ]
    },

    {
        chave: "herois",
        nome: "Heróis",
        tituloHistoria: "Heróis que venceram monstros",
        historia: [
            "Perseu recebeu uma missão impossível: cortar a cabeça da Medusa, um monstro que transformava em pedra quem olhasse para ela. Ele usou o escudo como espelho para não olhar direto e venceu.",
            "Teseu entrou no labirinto de Creta para enfrentar o Minotauro. Para não se perder, foi desenrolando um fio que a princesa Ariadne lhe deu, e assim achou a saída.",
            "Héracles, o homem mais forte do mundo, precisou cumprir doze trabalhos. No último, desceu ao Submundo e me levou para a superfície.",
            "Aquiles era quase invencível. Seu único ponto fraco era o calcanhar. Já Odisseu era o mais esperto: foi dele a ideia do cavalo de madeira que venceu a Guerra de Troia."
        ],
        perguntas: [
            "Quem cortou a cabeça da Medusa?",
            "Que monstro Teseu enfrentou no labirinto?",
            "Quantos trabalhos Héracles precisou cumprir?",
            "Onde ficava o ponto fraco de Aquiles?",
            "De quem foi a ideia do cavalo de madeira?"
        ],
        opcoes: [
            ["Teseu", "Perseu", "Aquiles", "Odisseu"],
            ["A Hidra", "A Medusa", "O Minotauro", "Um dragão"],
            ["Três", "Sete", "Dez", "Doze"],
            ["No calcanhar", "No ombro", "Na cabeça", "No joelho"],
            ["Aquiles", "Héracles", "Perseu", "Odisseu"]
        ],
        certas: [1, 2, 3, 0, 3],
        explicacoes: [
            "Perseu usou o escudo como espelho para não olhar para a Medusa.",
            "O Minotauro vivia no labirinto de Creta.",
            "Foram doze trabalhos, e o último foi me buscar no Submundo.",
            "Aquiles era quase invencível, menos no calcanhar.",
            "Odisseu era o mais esperto dos heróis."
        ]
    },

    {
        chave: "lugares",
        nome: "Lugares do Olimpo",
        tituloHistoria: "Uma viagem pelos lugares dos mitos",
        historia: [
            "Nossa viagem começa no Monte Olimpo, a montanha mais alta da Grécia, onde moravam os deuses.",
            "Lá embaixo fica o Submundo, o reino de Hades, para onde vão as almas. Para chegar, elas atravessam um rio na barca de Caronte, o barqueiro. Na porta, quem vigia sou eu.",
            "Na ilha de Creta ficava o labirinto onde morava o Minotauro.",
            "E a cidade de Atenas ganhou esse nome por causa da deusa Atena, que deu aos moradores um presente: a oliveira."
        ],
        perguntas: [
            "Em que montanha moravam os deuses?",
            "Quem governa o Submundo?",
            "Quem leva as almas na barca?",
            "Em que ilha ficava o labirinto do Minotauro?",
            "A cidade de Atenas tem o nome de qual deusa?"
        ],
        opcoes: [
            ["Monte Olimpo", "Monte Everest", "Monte Etna", "Monte Sinai"],
            ["Zeus", "Hades", "Poseidon", "Apolo"],
            ["Hermes", "Hades", "Caronte", "Héracles"],
            ["Sicília", "Chipre", "Rodes", "Creta"],
            ["Hera", "Atena", "Afrodite", "Ártemis"]
        ],
        certas: [0, 1, 2, 3, 1],
        explicacoes: [
            "O Olimpo é a montanha mais alta da Grécia.",
            "Hades é o rei do Submundo.",
            "Caronte é o barqueiro que leva as almas pelo rio.",
            "O labirinto ficava na ilha de Creta.",
            "Atena deu a oliveira para a cidade, que ganhou o nome dela."
        ]
    },

    {
        chave: "criaturas",
        nome: "Criaturas",
        tituloHistoria: "Os monstros da Grécia",
        historia: [
            "A Medusa tinha serpentes no lugar do cabelo, e quem olhasse nos olhos dela virava pedra.",
            "O Minotauro era metade homem e metade touro, e vivia preso num labirinto.",
            "A Hidra era uma serpente gigante com muitas cabeças. Se alguém cortasse uma, nasciam duas no lugar!",
            "O Pégaso era um cavalo branco com asas, que voava pelo céu. Os ciclopes eram gigantes com um olho só, no meio da testa. E eu, Cérbero, sou o cão de três cabeças."
        ],
        perguntas: [
            "O que a Medusa tinha no lugar do cabelo?",
            "O Minotauro era metade homem e metade o quê?",
            "Quando cortavam uma cabeça da Hidra, quantas nasciam?",
            "O que era o Pégaso?",
            "Quantos olhos tinha um ciclope?"
        ],
        opcoes: [
            ["Penas", "Fogo", "Serpentes", "Folhas"],
            ["Leão", "Touro", "Cavalo", "Bode"],
            ["Nenhuma", "Uma", "Duas", "Dez"],
            ["Um cavalo com asas", "Um leão com asas", "Um dragão", "Um pássaro gigante"],
            ["Um", "Dois", "Três", "Cem"]
        ],
        certas: [2, 1, 2, 0, 0],
        explicacoes: [
            "O cabelo da Medusa era feito de serpentes.",
            "O Minotauro era metade homem e metade touro.",
            "Cortar uma cabeça da Hidra fazia nascer duas.",
            "O Pégaso era um cavalo branco com asas.",
            "Os ciclopes tinham um olho só, no meio da testa."
        ]
    },

    {
        chave: "titas",
        nome: "Titãs",
        tituloHistoria: "A guerra dos titãs",
        historia: [
            "Antes dos deuses do Olimpo, quem mandava no mundo eram os titãs, filhos de Gaia, a Terra. O líder deles era Cronos.",
            "Cronos tinha medo de perder o trono para um filho, então engolia todos os seus filhos assim que nasciam. Mas Reia, sua esposa, escondeu o bebê Zeus e deu a Cronos uma pedra enrolada em panos. Ele engoliu a pedra sem perceber.",
            "Zeus cresceu, salvou os irmãos e lutou contra os titãs numa guerra de dez anos. Os deuses venceram, e os titãs foram presos no Tártaro, o lugar mais fundo do Submundo.",
            "Dois titãs ficaram famosos: Atlas, castigado a segurar o céu nas costas para sempre, e Prometeu, que roubou o fogo dos deuses para dar aos humanos."
        ],
        perguntas: [
            "Quem era o líder dos titãs?",
            "O que Cronos engoliu no lugar de Zeus?",
            "Qual foi o castigo de Atlas?",
            "O que Prometeu deu aos humanos?",
            "Para onde os titãs foram levados depois da guerra?"
        ],
        opcoes: [
            ["Zeus", "Atlas", "Cronos", "Prometeu"],
            ["Uma maçã", "Uma pedra", "Um peixe", "Uma moeda"],
            ["Segurar o céu", "Viver no mar", "Nunca dormir", "Ficar invisível"],
            ["A água", "O ouro", "A música", "O fogo"],
            ["Para o Olimpo", "Para o Tártaro", "Para Creta", "Para o mar"]
        ],
        certas: [2, 1, 0, 3, 1],
        explicacoes: [
            "Cronos era o líder dos titãs e pai de Zeus.",
            "Reia enrolou uma pedra em panos, e Cronos engoliu sem perceber.",
            "Atlas foi castigado a segurar o céu nas costas.",
            "Prometeu roubou o fogo dos deuses para os humanos.",
            "Os titãs ficaram presos no Tártaro, o lugar mais fundo do Submundo."
        ]
    },

    {
        chave: "zeus",
        nome: "Raios de Zeus",
        tituloHistoria: "Zeus, o rei do céu",
        historia: [
            "Zeus é filho do titã Cronos. Depois de vencer os titãs, virou o rei dos deuses e passou a morar no Monte Olimpo.",
            "Ele governa o céu, o trovão e a chuva. Quando fica bravo, atira raios lá de cima.",
            "Sua ave preferida é a águia, que voa mais alto que todas as outras. A esposa de Zeus é Hera, a rainha do Olimpo."
        ],
        perguntas: [
            "O que Zeus atira quando fica bravo?",
            "Qual é a ave de Zeus?",
            "Quem é a esposa de Zeus?",
            "Onde Zeus mora?",
            "Quem é o pai de Zeus?"
        ],
        opcoes: [
            ["Pedras", "Raios", "Flechas", "Ondas"],
            ["Coruja", "Pomba", "Águia", "Corvo"],
            ["Atena", "Afrodite", "Ártemis", "Hera"],
            ["No Monte Olimpo", "No mar", "No Submundo", "Em Troia"],
            ["Hades", "Cronos", "Poseidon", "Atlas"]
        ],
        certas: [1, 2, 3, 0, 1],
        explicacoes: [
            "Os raios são a arma de Zeus.",
            "A águia é a ave de Zeus.",
            "Hera é a esposa de Zeus e rainha do Olimpo.",
            "Zeus mora no alto do Monte Olimpo.",
            "Zeus é filho do titã Cronos."
        ]
    },

    {
        chave: "poseidon",
        nome: "Mares de Poseidon",
        tituloHistoria: "Poseidon, o senhor dos mares",
        historia: [
            "Poseidon é irmão de Zeus e o deus dos mares. Com seu tridente, uma lança de três pontas, ele levanta ondas enormes.",
            "Quando bate o tridente no chão, a terra treme: por isso ele também é o deus dos terremotos. E o animal preferido dele é o cavalo.",
            "Uma vez, Poseidon e Atena disputaram uma cidade. Atena deu a oliveira e venceu, e a cidade ganhou o nome dela: Atenas."
        ],
        perguntas: [
            "Poseidon é o deus de quê?",
            "Qual é a arma de Poseidon?",
            "Qual é o animal preferido de Poseidon?",
            "O que acontece quando ele bate o tridente no chão?",
            "Quem venceu Poseidon na disputa pela cidade?"
        ],
        opcoes: [
            ["Do céu", "Dos mortos", "Dos mares", "Do fogo"],
            ["O raio", "O tridente", "O arco", "O martelo"],
            ["O cavalo", "A águia", "A coruja", "O cão"],
            ["Chove", "Neva", "Faz sol", "A terra treme"],
            ["Hera", "Zeus", "Atena", "Hades"]
        ],
        certas: [2, 1, 0, 3, 2],
        explicacoes: [
            "Poseidon é o deus dos mares.",
            "O tridente é a lança de três pontas de Poseidon.",
            "O cavalo é o animal preferido de Poseidon.",
            "Ele é também o deus dos terremotos.",
            "Atena deu a oliveira e venceu a disputa por Atenas."
        ]
    },

    {
        chave: "hades",
        nome: "Submundo de Hades",
        tituloHistoria: "Hades, o rei dos mortos",
        historia: [
            "Hades é irmão de Zeus e governa o Submundo, o lugar para onde vão as almas.",
            "Ele se casou com Perséfone. Como ela comeu sementes de romã no Submundo, precisa passar parte do ano lá com ele.",
            "Hades tem um capacete mágico que o deixa invisível. E na porta do reino dele, quem vigia sou eu, Cérbero, o cão de três cabeças."
        ],
        perguntas: [
            "Que lugar Hades governa?",
            "Quem é a esposa de Hades?",
            "Que fruta Perséfone comeu no Submundo?",
            "Quantas cabeças tem Cérbero, o cão de Hades?",
            "O que o capacete de Hades faz?"
        ],
        opcoes: [
            ["O céu", "O mar", "O Submundo", "O Olimpo"],
            ["Perséfone", "Hera", "Afrodite", "Atena"],
            ["Maçã", "Uva", "Banana", "Romã"],
            ["Uma", "Duas", "Três", "Cinco"],
            ["Deixa invisível", "Faz voar", "Solta fogo", "Fala com animais"]
        ],
        certas: [2, 0, 3, 2, 0],
        explicacoes: [
            "Hades governa o Submundo, o reino das almas.",
            "Perséfone é a esposa de Hades.",
            "Por causa da romã, Perséfone passa parte do ano no Submundo.",
            "Três cabeças: eu mesmo.",
            "O capacete de Hades deixa quem usa invisível."
        ]
    },

    {
        chave: "atena",
        nome: "Estratégias de Atena",
        tituloHistoria: "Atena, a deusa da sabedoria",
        historia: [
            "Atena é a deusa da sabedoria. Ela nasceu de um jeito diferente: saiu da cabeça de Zeus, já adulta e vestindo armadura.",
            "Sua ave é a coruja, que enxerga no escuro, como quem é sábio enxerga o que os outros não veem.",
            "Atena deu a oliveira de presente para a cidade de Atenas, e lá construíram para ela um templo enorme: o Partenon."
        ],
        perguntas: [
            "Atena é a deusa de quê?",
            "De onde Atena nasceu?",
            "Qual é a ave de Atena?",
            "Que árvore Atena deu para a cidade de Atenas?",
            "Qual templo foi construído para Atena?"
        ],
        opcoes: [
            ["Do mar", "Da sabedoria", "Da caça", "Do amor"],
            ["Do mar", "De um ovo", "Da cabeça de Zeus", "De uma árvore"],
            ["Coruja", "Águia", "Pomba", "Pavão"],
            ["Pinheiro", "Macieira", "Coqueiro", "Oliveira"],
            ["O Coliseu", "O Partenon", "As Pirâmides", "A Torre Eiffel"]
        ],
        certas: [1, 2, 0, 3, 1],
        explicacoes: [
            "Atena é a deusa da sabedoria.",
            "Atena saiu da cabeça de Zeus, já adulta e com armadura.",
            "A coruja enxerga no escuro, como os sábios.",
            "A oliveira foi o presente de Atena para a cidade.",
            "O Partenon fica em Atenas e existe até hoje."
        ]
    },

    {
        chave: "ares",
        nome: "Guerras de Ares",
        tituloHistoria: "Ares, o deus da guerra",
        historia: [
            "Ares é o deus da guerra e das batalhas. Ele é filho de Zeus e de Hera.",
            "Os romanos o chamavam de Marte, e é por isso que o planeta vermelho tem esse nome.",
            "Ares era apaixonado pela deusa Afrodite. Os dois tiveram filhos, e dois deles iam com Ares para as batalhas: Fobos, o Medo, e Deimos, o Terror."
        ],
        perguntas: [
            "Ares é o deus de quê?",
            "Quem são os pais de Ares?",
            "Como os romanos chamavam Ares?",
            "Por qual deusa Ares era apaixonado?",
            "O que o nome Fobos quer dizer?"
        ],
        opcoes: [
            ["Da música", "Do mar", "Da guerra", "Do sol"],
            ["Zeus e Hera", "Cronos e Reia", "Hades e Perséfone", "Gaia e Urano"],
            ["Júpiter", "Marte", "Netuno", "Plutão"],
            ["Atena", "Hera", "Ártemis", "Afrodite"],
            ["Alegria", "Força", "Medo", "Fogo"]
        ],
        certas: [2, 0, 1, 3, 2],
        explicacoes: [
            "Ares é o deus da guerra.",
            "Ares é filho de Zeus e Hera.",
            "Marte é o nome romano de Ares, como o planeta vermelho.",
            "Ares e Afrodite foram um casal famoso.",
            "Fobos é o Medo. Daí vem a palavra “fobia”."
        ]
    },

    {
        chave: "apolo",
        nome: "Oráculo de Apolo",
        tituloHistoria: "Apolo, o deus do sol e da música",
        historia: [
            "Apolo é o deus do sol, da luz e da música. Ele tem uma irmã gêmea, Ártemis, a deusa da caça.",
            "O instrumento preferido de Apolo é a lira, uma pequena harpa. Na cidade de Delfos ficava o seu oráculo, um templo onde as pessoas iam perguntar sobre o futuro.",
            "Apolo se apaixonou pela ninfa Dafne, mas ela virou uma árvore de louro para fugir dele. Desde então, Apolo usa uma coroa de folhas de louro."
        ],
        perguntas: [
            "Apolo é o deus do sol e de quê?",
            "Quem é a irmã gêmea de Apolo?",
            "Qual é o instrumento de Apolo?",
            "Em que cidade ficava o oráculo de Apolo?",
            "De que folhas é a coroa de Apolo?"
        ],
        opcoes: [
            ["Da guerra", "Do mar", "Da música", "Dos mortos"],
            ["Hera", "Ártemis", "Atena", "Afrodite"],
            ["Tambor", "Flauta", "Trombeta", "Lira"],
            ["Delfos", "Esparta", "Troia", "Creta"],
            ["Oliveira", "Louro", "Rosa", "Palmeira"]
        ],
        certas: [2, 1, 3, 0, 1],
        explicacoes: [
            "Apolo é o deus do sol, da luz e da música.",
            "Ártemis, a deusa da caça, é gêmea de Apolo.",
            "A lira é uma pequena harpa.",
            "Em Delfos, as pessoas perguntavam sobre o futuro.",
            "Dafne virou um loureiro, e Apolo passou a usar uma coroa de louro."
        ]
    },

    {
        chave: "olimpo",
        nome: "Desafio do Olimpo",
        tituloHistoria: "O que o guardião nunca esquece",
        historia: [
            "Depois de vencer os titãs, três irmãos dividiram o mundo: Zeus ficou com o céu, Poseidon com o mar e Hades com o Submundo.",
            "No Submundo, as almas atravessam o rio na barca de Caronte. Na porta, eu, Cérbero, vigio com as minhas três cabeças.",
            "Só um herói conseguiu me levar para fora: Héracles, no último dos seus doze trabalhos. E foi lá embaixo que Perséfone comeu a romã que a prendeu ao Submundo."
        ],
        perguntas: [
            "Quantas cabeças tem Cérbero?",
            "Qual herói levou Cérbero para fora do Submundo?",
            "Quem leva as almas na barca?",
            "Que fruta Perséfone comeu?",
            "Com que parte do mundo Poseidon ficou?"
        ],
        opcoes: [
            ["Uma", "Duas", "Três", "Cinquenta"],
            ["Héracles", "Perseu", "Teseu", "Aquiles"],
            ["Hermes", "Caronte", "Zeus", "Hades"],
            ["Figo", "Uva", "Maçã", "Romã"],
            ["O céu", "O Submundo", "O mar", "A Terra"]
        ],
        certas: [2, 0, 1, 3, 2],
        explicacoes: [
            "Três cabeças, um rabo e muita paciência.",
            "Héracles me levou no último dos doze trabalhos.",
            "Caronte é o barqueiro do Submundo.",
            "A romã prendeu Perséfone ao Submundo.",
            "Zeus ficou com o céu, Poseidon com o mar e Hades com o Submundo."
        ]
    }
];
