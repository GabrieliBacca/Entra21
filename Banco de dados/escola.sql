CREATE DATABASE escola;

USE escola;

CREATE TABLE aluno(
	Id_Aluno INTEGER PRIMARY KEY,
    Nome_Aluno Varchar(50) NOT NULL,
    Cpf_Aluno VARCHAR(14) NOT NULL 
);

ALTER TABLE aluno ADD Turma Varchar(2) Not NUll;

insert into aluno values
(1,'Marcia Maria', '11122233355','A1'),
(2,'Mario Madaleno', '11122233355','A2'),
(3,'Joao Joaquim', '11122233355','B1'),
(4,'Leonora Latina', '11122233355','B1');

select nome_alun from aluno where turma = 'B1'

