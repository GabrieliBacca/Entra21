create table artista(
	Id_Artista integer primary key auto_increment,
    Nome_Artista varchar(50),
    Area varchar(50),
    Genero varchar(50),
    Altura float
);

insert into artista (Nome_Artista, Area, Genero, Altura) values ('Rita Lee', 'cantores', 'feminino', 1.65), 
('Henrique', 'cantores', 'masculino', 1.95),
('Laura Marano', 'atores', 'feminino', 1.65),
('Marina Ruy Barbosa', 'atores', 'feminino', 1.85),
('Larissa Manoela', 'atores', 'feminino', 1.55);

SELECT * from artista;

select nome_artista from artista;

select area from artista;

select * from artista where genero = 'feminino';

select altura from artista where area = 'cantores';

SELECT AVG(altura) FROM artista;

update artista set nome_artista = 'gabi' where Id_Artista ='1';
update artista set altura = '1.98' where Id_Artista = '3';
update artista set area = 'guitarrista' where id_artista='5';

select * from artista  where area='guitarrista' and genero = 'feminino';



