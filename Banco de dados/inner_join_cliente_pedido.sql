use netflix;

create table cliente(
	id_cliente int primary key auto_increment,
    nome varchar(50),
    email varchar(50),
    cidade varchar(50)
);

create table pedido(
	id_pedido int primary key auto_increment,
    num_pedido int,
    data_pedido date,
    produto varchar(80),
	id_cliente int references cliente(id_cliente)

);

-- INSERTS

INSERT INTO cliente (nome, email, cidade) VALUES
    ('João Silva', 'joao.silva@email.com', 'São Paulo'),
    ('Maria Oliveira', 'maria.oliveira@email.com', 'Rio de Janeiro'),
    ('Carlos Santos', 'carlos.santos@email.com', 'Salvador'),
    ('Ana Pereira', 'ana.pereira@email.com', 'Belo Horizonte'),
    ('Fernando Souza', 'fernando.souza@email.com', 'Porto Alegre'),
    ('Mariana Costa', 'mariana.costa@email.com', 'Brasília'),
    ('Ricardo Lima', 'ricardo.lima@email.com', 'Recife'),
    ('Juliana Rocha', 'juliana.rocha@email.com', 'Fortaleza'),
    ('Gabriel Almeida', 'gabriel.almeida@email.com', 'Manaus'),
    ('Patrícia Santos', 'patricia.santos@email.com', 'Curitiba'),
	('Gabrieli Bacca', 'gabi.bacca@email.com', 'SC é o fluxo');

    
INSERT INTO pedido (num_pedido, data_pedido, produto, id_cliente) VALUES
    (1001, '2023-01-15', 'Smartphone modelo X', 1),
    (1002, '2023-02-20', 'Notebook ultrafino Y', 3),
    (1003, '2023-03-10', 'Câmera digital Z', 2),
    (1004, '2023-04-05', 'Fone de ouvido Bluetooth', 5),
    (1005, '2023-05-18', 'Tablet de última geração', 4),
    (1006, '2023-06-22', 'Console de videogame A', 7),
    (1007, '2023-07-08', 'Impressora a laser B', 6),
    (1008, '2023-08-14', 'Monitor ultra HD', 9),
    (1009, '2023-09-30', 'Teclado mecânico para gamers', 8),
    (1010, '2023-10-25', 'Mouse sem fio C', 10),
    (1001, '2023-01-15', 'Smartphone modelo X', 1),
    (1002, '2023-02-20', 'Notebook', 1),
    (1003, '2023-03-10', 'Câmera', 1),
    (1004, '2023-04-05', 'Fone', 1),
    (1005, '2023-05-18', 'Tablet', 1),
    (1006, '2023-06-22', 'Console de videogame A', 2),
    (1007, '2023-07-08', 'Impressora', 2),
    (1008, '2023-08-14', 'Monitor', 2),
    (1009, '2023-09-30', 'Teclado', 2),
    (1010, '2023-10-25', 'Mouse sem fio', 1);

-- SELECTS 

-- FORMA DIFERENTE MAIS RAPIDA DE FAZER O SELECT
select c.nome as NomeCliente , c.email as EmailCliente, p.num_pedido as NumeroPedido from Cliente c inner join pedido p on c.id_cliente = p.id_cliente order by c.nome asc;
-- ------------------------------------------------------------------


select cliente.nome, cliente.email, cliente.cidade, pedido.* from pedido inner join cliente on pedido.id_cliente = cliente.id_cliente order by pedido.id_cliente asc;

select cliente.nome, cliente.email, cliente.cidade, count(pedido.id_pedido) from pedido inner join cliente on pedido.id_cliente = cliente.id_cliente group by cliente.nome, cliente.email, cliente.cidade;

select pedido.num_pedido, pedido.data_pedido, cliente.nome, cliente.email, cliente.cidade from pedido inner join cliente on pedido.id_cliente = cliente.id_cliente;

select cliente.nome from cliente left join pedido on pedido.id_cliente = cliente.id_cliente where pedido.id_pedido is null;
