CREATE TABLE IF NOT EXISTS `vendas` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`idcliente` int NOT NULL UNIQUE,
	`produtos` varchar(255) NOT NULL,
	`quantidade` varchar(255) NOT NULL,
	`total` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `clientes` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `produtos` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`quantidade` int NOT NULL,
	`valor` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`token` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `vendas` ADD CONSTRAINT `vendas_fk1` FOREIGN KEY (`idcliente`) REFERENCES `clientes`(`id`);


