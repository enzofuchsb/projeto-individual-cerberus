DROP DATABASE IF EXISTS cerberus;
CREATE DATABASE cerberus;
USE cerberus;

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

CREATE TABLE tentativa_quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    categoria VARCHAR(30) NOT NULL,
    acertos INT NOT NULL,
    total INT NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE leitura_historia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    historia VARCHAR(30) NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (fk_usuario, historia),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

INSERT INTO usuario (nome, email, senha, patrono, pontos_zeus, pontos_poseidon, pontos_hades, pontos_atena, pontos_ares, pontos_apolo) VALUES
    ('Viajante Teste', 'teste@cerberus.com', '12345678', 'hades', 1, 0, 3, 1, 0, 0);

INSERT INTO usuario (nome, email, senha) VALUES
    ('Alma Nova', 'nova@cerberus.com', '12345678');

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

INSERT INTO tentativa_quiz (fk_usuario, categoria, acertos, total) VALUES
    (2, 'olimpianos', 3, 5),
    (2, 'herois', 4, 5);

INSERT INTO leitura_historia (fk_usuario, historia) VALUES
    (1, 'persefone'),
    (1, 'heracles'),
    (1, 'cerberus'),
    (1, 'hades'),
    (2, 'persefone');

SELECT * FROM usuario;
SELECT * FROM tentativa_quiz;
SELECT * FROM leitura_historia;
