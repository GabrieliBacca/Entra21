CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE livro(
	Id_Livro INTEGER PRIMARY KEY,
    Nome_Livro VARCHAR(100) NOT NULL,
    Genero_Livro VARCHAR(40) NOT NULL
);

ALTER TABLE livro ADD Quantidade_Paginas INTEGER NOT NULL;

ALTER TABLE livro DROP COLUMN Quantidade_Paginas;

INSERT INTO livro VALUES(1,'Senhor dos aneis', 'fantasia');
INSERT INTO livro VALUES(2,'Harry-Pota', 'fantasia');

INSERT INTO livro (Id_Livro, Genero_Livro, Nome_Livro) VALUES(3,'Fantasia', 'Dracula'); 

INSERT INTO livro VALUES(4,'Orgulho e preoconceito', 'romance'), 
(5, 'Verao que mudou minha vida', 'romance'),
(6, 'Divergente', 'distopia');

SELECT * FROM livro;

SELECT * FROM livro WHERE Genero_Livro = 'fantasia';

SELECT Nome_Livro, Id_Livro FROM livro;


