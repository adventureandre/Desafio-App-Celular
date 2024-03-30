CREATE TABLE IF NOT EXISTS `produtos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(60) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`quantidade` int NOT NULL,
	`valor` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `clientes` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `venda` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`idcliente` int NOT NULL,
	`idproduto` int NOT NULL,
	`quantidade` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `user` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);



ALTER TABLE `venda` ADD CONSTRAINT `venda_fk1` FOREIGN KEY (`idcliente`) REFERENCES `clientes`(`id`);

ALTER TABLE `venda` ADD CONSTRAINT `venda_fk2` FOREIGN KEY (`idproduto`) REFERENCES `produtos`(`id`);
