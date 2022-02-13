CREATE DATABASE group_a_db;

CREATE USER 'group_a_user'@'db.hollisjamison.com' IDENTIFIED WITH mysql_native_password BY 'gr0upbSt4ck3duc4ti0n';
GRANT ALL ON group_a_db.* TO 'group_a_user'@'db.hollisjamison.com';

USE privyData;
SELECT * FROM customerPurchases;

USE group_a_db; 
CREATE TABLE contacts(
id INT auto_increment,
firstName VARCHAR(255) NOT NULL,
lastName VARCHAR(255) NOT NULL,
phoneNumber VARCHAR(255) NOT NULL, 
email VARCHAR (255) NOT NULL,
city VARCHAR (255) NOT NULL,
homeState VARCHAR (2),
lastOrder DECIMAL (5,2),
lastOrderDate DATE,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE textMessages (
id INT auto_increment,
textMessage VARCHAR (255),
messageStatus ENUM ('draft', 'failed', 'sent'),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE contactTexts(
contactId INT,
textMessageId INT,
sentDate DATETIME DEFAULE NOW()  
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (contactId, textMessageId),
FOREIGN KEY(contactId) REFERENCES contacts(id),
FOREIGN KEY(textMessageId) REFERENCES textMessages(id)
); 

INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Alan', 'Won', '(516)992-9423', 'ahwon@icloud.com', 'Mitchell', 'AZ', 33, '2021-08-30');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Amelie', 'Mosley', '(667)303-9303', 'meinkej@yahoo.com', 'Gaskil', 'DE',	26, '2021-11-17');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Andres',	'Ramon', '(413)785-5626', 'andale@icloud.com', 'Edgerton', 'RI', 76.99,	'2021-12-20'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Arturo',	'Cisneros', '(347)563-4789', 'munson@live.com', 'Del Rey Oaks',	'RI', 120, '2021-10-11'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Charlize', 'Perez', '(289)572-1200',	'jaffe...@verizon.net', 'Bannister Acres', 'MC', 89.99,	'2021-08-24'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Dahlia', 'Arellano', '(618)691-4399', 'jtorkbob@comcast.net', 'Two Brooks', 'WI', 26, '2021-11-30');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Dan',	'Zigi',	'(256)931-9696', 'danzigis,m@icloud.com', 'Willaha', 'OH', 12,	'2021-10-21'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Drake', 'Rebs',  '(219)683-8767', 'wkrebs@sbcglobal.net', 'Conyersville', 'AZ', 44, '2021-09-17'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Esperanza', 'Knapp', '(810)234-9251', 'pgottsch@mac.com', 'Morgan Mill',	'OK', 120, '2021-11-18'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Fisher', 'Here', '(434)299-8652', 'a~dhere@aol.com', 'Kreutzberg', 'NY', 76.99, '2021-09-17');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Frederic', 'Lee', '(205)365-8292',	'frederic@sbcglobal.net', 'Spring City', 'MS', 87, '2021-10-27');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Gavin', 'Obrien', '(786)441-2729', 'gavinls@sbcglobal.net', 'Farmington Lake', 'OK', 95, '2021-09-30');	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Giovanny', 'Atkinson', '(401)433-3114', 'spa.dkins@att.net','Warner', 'NH', 35 '2021-08-12');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Howard', 'Carrillo', '(289)672-8870', 'rddesign@live.com', 'Coltman', 'WV', 12, '2021-11-03');	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('James', 'Randolph', '(507)623-3577', 'sopwith@aol.com', 'Mount Baker', 'NY',	45, '2021-09-23'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Jamie', 'Martinez', '(617)889-8674', 'intlprog@hotmail.com', 'Wilhelm Park',	'MT', 54, '2021-12-08'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Jaslene', 'Whitaker', '(352)434-1651', 'bonmots@comcast.net', 'Sacramento', 'ME', 79.99, '2021-10-08');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Jayden', 'Chi', '(305)674-4548', 'fukuchi@gmail.com', 'Skookumchuck', 'VA', 26, '2021-12-07'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Jesse', 'Hahn', '(231)823-9734', 'jesse@sbcglobal.net', 'Hebron', 'AZ', 49.99, '2021-11-10');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Joel', 'Schaefer', '(336)877-9176', 'joelw@yahoo.com', 'Ipswich', 'IA', 11,	'2021-12-07'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Joel', 'Schaefer', '(336)877-9176', 'joelw@yahoo.com', 'Ipswich', 'IA', 76.99, '2021-12-13'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Jordyn', 'Mullen', '(385)207-5077', 'errxn@sbcglobal.net', 'Montverde Junction',	'NJ', 28, '2021-09-29');	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Joyce', 'Frank', '(319)635-4374', 'bockelboy@me.com', 'Mittenlane', 'TX', 49.99, '2021-10-28');	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Korbin', 'Pereinar', '(415)572-8494', 'pereinar@sbcglobal.net', 'East Waterford', 'ME', 22, '2021-10-29'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Kyan',	'Harper', '(209)828-3279', 'webteam@msn.com', 'Slater', 'MO', 13.99	, '2021-12-23'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Louise', 'Barber', '(336)929-8671', 'louise@me.com', 'Curriers', 'NM', 89.99, '2021-12-03');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Lucille',	'Malattia', '(608)380-4822', 'malattia@yahoo.com', 'Cimarron', 'WA', 15, '2021-09-23'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Marcel', 'Sloan', '(616)889-7721', 'marslo@aol.com', 'Willow Run', 'IL',	89.99, '2021-09-09');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Marshall', 'Landry', '(551)587-7297', 'reziac@gmail.com', 'Midland City', 'AK', 28.45, '2021-09-30'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Meadow', 'Berger', '(670)233-6224', 'syrinx@optonline.net', 'Longview', 'MA', 85, '2021-11-22'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Murdoc', 'Wilkinson', '(806)774-7884', 'murdocj@optonline.net', 'Merrimac South', 'AL', 76.99, '2021-11-24'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Nayeli', 'Juarez', '(657)378-3335', 'storerm@sbcglobal.net', 'Farwell', 'FL', 33, '2021-12-30');	1
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Nayomi', 'Dawson', '(276)335-6240', 'naoya@msn.com', 'Scottsville', '', 12' 2021-11-09'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Nelson', 'Silva', '(303)961-5760', 'dgatwood@optonline.net', 'Pickerel Narrows', 'MT', 13.99, '2021-10-15'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Olive', 'Lang', '(618)472-3603', 'zilla@optonline.net', 'East Natchitoches', '',	120, '2021-08-16'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Owen', 'Stein', '(769)355-5422', 'lstein@aol.com', 'Martins Corner',	'TX', 32, '2021-10-06');	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Paris', 'Mann', '(336)283-4614', 'bachmann@hotmail.com','North Knoxville', 'AL', 16, '2021-12-03');	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Rafael', 'Viegas', '(214)969-3080', 'fviegas@mac.com', 'Storms', 'TX', 39, '2021-12-22'); 	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Reagan', 'Sweeney', '(216)271-8398', 'miyop@verizon.net', 'Stanardsville', 'NH', 13.99, '2021-11-26'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Rhianna',	'Armstrong', '(575)628-5858', 'wojciech@outlook.com', 'Fairland	', 'GA', 89.99, '2021-11-11');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Rob', 'Shaw', '(615)221-5554', 'mrobshaw@outlook.com', 'Social Circle', 'MO', 54, '2021-09-08'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Rodrigo', 'Cuevas', '(308)204-9038', 'bcevc@icloud.com', 'Center', 'MA', 11, '2021-10-26');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Roger', 'Brown', '(323)298-3567', 'rogerspl@mac.com', 'Coal Creek', 'OK', 13.99, '2021-10-20');
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Santiago', 'Riddle', '(425)423-4138', 'harryh@icloud.com', 'Lyon', 'WV', 12, '2021-08-26'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Santino', 'Cabrera', '(747)900-6516', 'trieuvan@aol.com', 'Kalauao',	'SD', 87, '2021-12-24');	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Sara', 'Palmer', '(208)255-2382', 'lpalmer@icloud.com', 'Bent Pine', 'VA', 23, '2021-08-25');	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Shaniya', 'Brown', '(334)201-6824',	'mbrown@live.com', 'Rabbitown',	'TN', 26, '2021-11-10'); 
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Whitney', 'Shelton', '(334)201-6824',	'presoff@msn.com', 'Emerson', 'MT',	116, '2021-12-01');	
INSERT INTO contacts (firstName, lastName, phoneNumber, email, city, homeState, lastOrder, lastOrderDate) VALUES ('Zaiden', 'Duran', '(618)231-7450', 'cderoove@gmail.comm', 'Brentwood Village', 'MT',	45, '2021-08-10');

INSERT INTO textMessages (textMessage, messageStatus) VALUES ('Enjoy 15% off!', 'sent');
INSERT INTO textMessages (textMessage, messageStatus) VALUES ('Sorry, message error.', 'failed');
INSERT INTO textMessages (textMessage, messageStatus) VALUES ('Enjoy.... Discount!', 'draft'); 

INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(1, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(2, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(3, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(4, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(5, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(6, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(7, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(8, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(9, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(10, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(11, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(12, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(13, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(14, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(15, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(16, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(17, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(18, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(19, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(20, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(21, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(22, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(23, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(24, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(25, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(26, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(27, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(28, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(29, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(30, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(31, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(32, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(33, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(34, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(35, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(36, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(37, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(38, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(39, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(40, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(41, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(42, 3, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(43, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(44, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(45, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(46, 2, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(47, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(48, 1, DEFAULT);
INSERT INTO contactTexts (contactId, textMessageId, sentDate) VALUES(49, 3, DEFAULT);
