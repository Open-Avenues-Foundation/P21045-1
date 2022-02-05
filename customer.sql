CREATE DATABASE privyData;

CREATE USER 'privy'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Pr1vy$2';
GRANT ALL ON privyClients.* TO 'privy'@'localhost';

USE privyData;
SELECT * FROM customerPurchases;

CREATE TABLE customers(
id INT auto_increment,
firstName VARCHAR(255) NOT NULL,
lastName VARCHAR(255) NOT NULL,
phoneNumber VARCHAR(255) NOT NULL, 
email VARCHAR (255) NOT NULL,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE purchases (
id INT auto_increment,
lastOrderPrice DECIMAL (10,2) NOT NULL,
lastOrderDate DATE (9999-12-31) NOT NULL,
city VARCHAR (255),
stateAbr VARCHAR (2),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE customerPurchases(
customerId INT,
purchaseId INT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (customerId, purchaseId),
FOREIGN KEY(customerId) REFERENCES customers(id),
FOREIGN KEY(purchaseId) REFERENCES purchases(id)
); 


INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Alan', 'Won', '(516)992-9423', 'ahwon@icloud.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Amelie', 'Mosley', '(667)303-9303', 'meinkej@yahoo.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Andres',	'Ramon', '(413)785-5626', 'andale@icloud.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Arturo',	'Cisneros', '(347)563-4789', 'munson@live.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Charlize', 'Perez', '(289)572-1200',	'jaffe...@verizon.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Dahlia', 'Arellano', '(618)691-4399', 'jtorkbob@comcast.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Dan',	'Zigi',	'(256)931-9696', 'danzigis,m@icloud.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Drake', 'Rebs',  '(219)683-8767', 'wkrebs@sbcglobal.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Esperanza', 'Knapp', '(810)234-9251',	'pgottsch@mac.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Fisher', 'Here', '(434)299-8652', 'a~dhere@aol.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Frederic', 'Lee', '(205)365-8292',	'frederic@sbcglobal.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Gavin', 'Obrien', '(786)441-2729', 'gavinls@sbcglobal.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Giovanny', 'Atkinson', '(401)433-3114', 'spa.dkins@att.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Howard', 'Carrillo', '(289)672-8870', 'rddesign@live.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('James', 'Randolph', '(507)623-3577', 'sopwith@aol.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Jamie', 'Martinez', '(617)889-8674', 'intlprog@hotmail.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Jaslene', 'Whitaker', '(352)434-1651', 'bonmots@comcast.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Jayden', 'Chi', '(305)674-4548', 'fukuchi@gmail.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Jesse', 'Hahn', '(231)823-9734', 'jesse@sbcglobal.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Jesse', 'Hahn', '(231)823-9734', 'jesse@sbcglobal.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Joel',	'Schaefer', '(336)877-9176', 'joelw@yahoo.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Joel', 'Schaefer', '(336)877-9176', 'joelw@yahoo.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Jordyn', 'Mullen', '(385)207-5077', 'errxn@sbcglobal.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Joyce', 'Frank', '(319)635-4374', 'bockelboy@me.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Korbin', 'Pereinar', '(415)572-8494', 'pereinar@sbcglobal.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Kyan',	'Harper', '(209)828-3279', 'webteam@msn.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Louise', 'Barber', '(336)929-8671', 'louise@me.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Lucille',	'Malattia', '(608)380-4822', 'malattia@yahoo.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Marcel', 'Sloan', '(616)889-7721', 'marslo@aol.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Marshall', 'Landry', '(551)587-7297', 'reziac@gmail.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Meadow', 'Berger', '(670)233-6224', 'syrinx@optonline.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Murdoc', 'Wilkinson', '(806)774-7884', 'murdocj@optonline.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Nayeli', 'Juarez', '(657)378-3335', 'storerm@sbcglobal.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Nayomi', 'Dawson', '(276)335-6240', 'naoya@msn.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Nelson', 'Silva', '(303)961-5760', 'dgatwood@optonline.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Olive', 'Lang', '(618)472-3603', 'zilla@optonline.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Owen', 'Stein', '(769)355-5422', 'lstein@aol.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Paris', 'Mann', '(336)283-4614', 'bachmann@hotmail.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Rafael', 'Viegas', '(214)969-3080', 'fviegas@mac.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Reagan', 'Sweeney', '(216)271-8398', 'miyop@verizon.net');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Rhianna',	'Armstrong', '(575)628-5858', 'wojciech@outlook.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Rob', 'Shaw', '(615)221-5554', 'mrobshaw@outlook.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Rodrigo', 'Cuevas', '(308)204-9038', 'bcevc@icloud.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Roger', 'Brown', '(323)298-3567', 'rogerspl@mac.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Santiago', 'Riddle', '(425)423-4138', 'harryh@icloud.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Santino', 'Cabrera', '(747)900-6516', 'trieuvan@aol.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Sara', 'Palmer', '(217)657-9901', 'lpalmer@icloud.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Shaniya',	'Brown', '(208)255-2382', 'mbrown@live.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Whitney', 'Shelton', '(334)201-6824',	'presoff@msn.com');
INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES ('Zaiden', 'Duran', '(618)231-7450', 'cderoove@gmail.comm');


INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('33', '2021/8/30', 'Mitchell', 'AZ');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('26', '2021/11/17', 'Gaskil', 'DE');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('76.99', '2021/12/20', 'Edgerton', 'RI');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('120', '2021/10/11', 'Del Rey Oaks', 'RI');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('89.99', '2021/8/24', 'Bannister Acres', 'MC');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('26', '2021/11/30', 'Two Brooks', 'WI');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('12', '2021/10/21', 'Willaha', 'OH');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('44', '2021/9/17', 'Conyersville', 'AZ');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('120', '2021/11/18', 'Morgan Mill', 'OK');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('76.99', '2021/9/17', 'Kreutzberg', 'NY');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('87', '2021/10/27', 'Spring City', 'MS');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('95', '2021/9/30', 'Farmington Lake', 'OK');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('35', '2021/8/12', 'Warner', 'NH');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('12', '2021/11/3', 'Coltman', 'WV');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('45', '2021/9/23', 'Mount Baker', 'NY');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('54', '2021/8/12', 'Wilhelm Park', 'MT');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('79.99', '2021/10/8', 'Sacramento', 'ME');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('26', '2021/12/7', 'Skookumchuck', 'VA');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('49.99', '2021/11/10', 'Hebron', 'AZ');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('11', '2021/9/24', 'Brookhaven', '');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('11', '2021/12/7', 'Ipswich', 'IA');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('76.99', '2021/12/13', 'Ipswich',	'IA');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('28', '2021/9/29', 'Montverde Junction', 'NJ');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('49.99', '2021/10/28', 'Mittenlane', 'TX');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('22', '2021/10/29', 'East Waterford', 'ME');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('13.99', '2021/12/23', 'Slater', 'MO');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('89.99', '2021/12/3', 'Curriers', 'NM');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('15', '2021/9/23', 'Cimarron', 'WA');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('89.99', '2021/9/9', 'Willow Run', 'IL');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('28.45', '2021/9/30', 'Midland City', 'AK');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('85', '2021/11/22', 'Longview', 'MA');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('76.99', '2021/11/24', 'Merrimac South', 'AL');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('33', '2021/12/30', 'Farwell', 'FL');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('12', '2021/11/9', 'Scottsville', '');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('13.99', '2021/10/15', 'Pickerel Narrows', 'MT');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('120', '2021/8/16', 'East Natchitoches', '');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('32', '2021/10/6', 'Martins Corner', 'TX');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('16', '2021/12/3', 'North Knoxville', 'AL');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('39', '2021/12/22', 'Storms', 'TX');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('13.99', '2021/11/26', 'Stanardsville', 'NH');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('89.99', '2021/11/11', 'Fairland', 'GA');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('54', '2021/9/8', 'Social Circle', 'MO');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('11', '2021/10/26', 'Center', 'MA');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('13.99', '2021/10/20', 'Coal Creek', 'OK');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('12', '2021/8/26', 'Lyon', 'WV');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('87', '2021/12/24', 'Kalauao', 'SD');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('23', '2021/8/25', 'Bent Pine', 'VA');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('26', '2021/11/10', 'Rabbitown', 'TN');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('116', '2021/12/1', 'Emerson', 'MT');
INSERT INTO purchases (lastOrderPrice, lastOrderDate, city, stateAbr) VALUES ('45', '2021/8/10', 'Brentwood Village', 'MT');

INSERT INTO customerPurchases (customerId, purchaseId) VALUES(1, 1);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(2, 2);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(3, 3);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(4, 4);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(5, 5);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(6, 6);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(7, 7);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(8, 8);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(9, 9);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(10,11);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(11, 11);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(12, 12);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(13, 13);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(14, 14);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(15, 15);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(16, 16);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(17, 17);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(18, 18);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(19, 19);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(20, 20);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(21, 21);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(22, 22);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(23, 23);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(24, 24);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(25, 25);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(26, 26);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(27, 27);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(28, 28);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(29, 29);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(30, 30);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(31, 31);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(32, 32);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(33, 33);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(34, 34);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(35, 35);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(36, 36);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(37, 37);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(38, 38);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(39, 39);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(40, 40);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(41, 41);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(42, 42);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(43, 43);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(44, 44);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(45, 45);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(46, 46);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(47, 47);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(48, 48);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(49, 49);
INSERT INTO customerPurchases (customerId, purchaseId) VALUES(50, 50);
