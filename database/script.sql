-- ===== BANCO DO CERBERUS =====
-- Rode tudo de uma vez no Workbench (raio: "Execute").
-- Cuidado: o DROP apaga o banco antigo e cria de novo do zero.
DROP DATABASE IF EXISTS cerberus;
CREATE DATABASE cerberus;
USE cerberus;


-- ===== TABELAS =====

-- quem tem conta no site
-- patrono e pontos ficam vazios até a pessoa fazer o Teste do Patrono
-- os pontos de cada deus alimentam o gráfico de radar do perfil
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(60) NOT NULL,
    patrono VARCHAR(20),
    pontos_zeus INT DEFAULT 0,
    pontos_poseidon INT DEFAULT 0,
    pontos_hades INT DEFAULT 0,
    pontos_atena INT DEFAULT 0,
    pontos_ares INT DEFAULT 0,
    pontos_apolo INT DEFAULT 0
);

-- uma linha cada vez que a pessoa termina um quiz
-- categoria é o quiz que foi jogado: 'olimpianos', 'titas', 'hades'...
CREATE TABLE tentativa_quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    categoria VARCHAR(30) NOT NULL,
    acertos INT NOT NULL,
    total INT NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- uma linha para cada história do Arquivo que a pessoa leu
-- historia: 'persefone', 'heracles', 'cerberus', 'hades' ou 'aqueronte'
-- o UNIQUE faz cada história contar uma vez só por pessoa
CREATE TABLE leitura_historia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    historia VARCHAR(30) NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (fk_usuario, historia),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);


-- ===== DADOS DE TESTE =====

-- usuário 1: já fez o teste e vários quizzes (perfil cheio)
-- usuário 2: conta nova, sem teste (o radar vira o convite)
INSERT INTO usuario (nome, email, senha, patrono, pontos_zeus, pontos_poseidon, pontos_hades, pontos_atena, pontos_ares, pontos_apolo) VALUES
    ('Viajante Teste', 'teste@cerberus.com', '12345678', 'hades', 1, 0, 3, 1, 0, 0);

INSERT INTO usuario (nome, email, senha) VALUES
    ('Alma Nova', 'nova@cerberus.com', '12345678');

-- 12 quizzes do usuário 1 (o gráfico de linha mostra os últimos 10)
INSERT INTO tentativa_quiz (fk_usuario, categoria, acertos, total) VALUES
    (1, 'olimpianos', 2, 5),
    (1, 'herois', 3, 5),
    (1, 'olimpianos', 3, 5),
    (1, 'lugares', 4, 5),
    (1, 'criaturas', 2, 5),
    (1, 'herois', 5, 5),
    (1, 'criaturas', 4, 5),
    (1, 'titas', 3, 5),
    (1, 'lugares', 5, 5),
    (1, 'hades', 4, 5),
    (1, 'titas', 4, 5),
    (1, 'hades', 5, 5);

-- 2 quizzes do usuário 2
INSERT INTO tentativa_quiz (fk_usuario, categoria, acertos, total) VALUES
    (2, 'olimpianos', 3, 5),
    (2, 'herois', 4, 5);

-- o usuário 1 leu 4 das 5 histórias, o usuário 2 leu 1
INSERT INTO leitura_historia (fk_usuario, historia) VALUES
    (1, 'persefone'),
    (1, 'heracles'),
    (1, 'cerberus'),
    (1, 'hades'),
    (2, 'persefone');


-- ===== CONFERIR =====
SELECT * FROM usuario;
SELECT * FROM tentativa_quiz;
SELECT * FROM leitura_historia;
