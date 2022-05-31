create database products
GO
USE `products`
GO
create table Providers(
	id varchar(8) PRIMARY KEY NOT NULL,
	name varchar(100) NOT NULL,
	address varchar(100) NOT NULL,
	phone varchar(14) NOT NULL,
	email varchar(255) NOT NULL,
	status bit NOT NULL
);
GO
create table Categories(
	id varchar(8) PRIMARY KEY NOT NULL,
	name varchar(100) NOT NULL,
	description varchar(255) NOT NULL
);
GO
create table Products(
	id varchar(8) PRIMARY KEY NOT NULL,
	name varchar(100) NOT NULL,
	description varchar(255) NOT NULL,
	purchase_price DECIMAL(5,2) NOT NULL,
	sale_price DECIMAL(5,2) NOT NULL,
	stock BIGINT NOT NULL,
	status bit NOT NULL,
	idProvider varchar(8) NOT NULL,
	idCategory varchar(8) NOT NULL,
	CONSTRAINT fk_provider_product FOREIGN KEY (idProvider)
	REFERENCES Providers (id),
	CONSTRAINT fk_category_product FOREIGN KEY (idCategory)
	REFERENCES Categories (id),
);
GO
INSERT INTO Categories VALUES('CAT00001', 'Comida', 'Es la categoria enfocada a alimentos');
INSERT INTO Categories VALUES('CAT00002', 'Bebida', 'Es la categoria enfocada a bebidas');
INSERT INTO Categories VALUES('CAT00003', 'Postre', 'Es la categoria enfocada a postres');
GO
INSERT INTO Providers VALUES('PRO00001', 'El unico', 'res los alphes', '50377668844', 'elunico@gmail.com', 0);
INSERT INTO Providers VALUES('PRO00002', 'Humo', 'res la gloria', '50367668944', 'humo@gmail.com', 0);
INSERT INTO Providers VALUES('PRO00003', 'GoldMeal', 'res cipres', '50377661122', 'goldmeal@gmail.com', 0);
GO
INSERT INTO Products VALUES('PRD00001', 'Galleta', 'Galletas orneadas', 1.25, 3.99, 1000, 0 , 'PRO00002', 'CAT00003');
INSERT INTO Products VALUES('PRD00002', 'Lata Cocacola', 'Soda en lata sabor cola', 0.25, 1.50, 1000, 0 , 'PRO00001', 'CAT00002');
INSERT INTO Products VALUES('PRD00003', 'Pan Integral', 'Galletas orneadas', 0.75, 1.50, 1000, 0 , 'PRO00003', 'CAT00001');


SELECT * FROM Providers
SELECT * FROM Categories
SELECT * FROM Products

SELECT P.id, P.name, P.description, P.purchase_price, P.sale_price, P.stock, P.status, C.name as category, PR.name as provider from Products AS P 
INNER JOIN Categories AS C ON P.idCategory = C.id 
INNER JOIN Providers AS PR ON P.idProvider = PR.id 
WHERE P.status = 0

SELECT P.id, P.name, P.description, P.purchase_price, P.sale_price, P.stock, P.status, C.name as category, PR.name as provider from Products AS P 
INNER JOIN Categories AS C ON P.idCategory = C.id 
INNER JOIN Providers AS PR ON P.idProvider = PR.id 
WHERE P.status = 0 AND P.id = ''