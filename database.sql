-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping_list (
	id SERIAL PRIMARY KEY,
	name varchar(80) NOT NULL,
	quantity DECIMAL(10,2) NOT NULL,
	unit varchar(20) NULL,
	is_purchased BOOLEAN DEFAULT FALSE
);

INSERT INTO shopping_list ("name", "quantity", "unit")
VALUES ('Apples', 5.3, 'lbs'), ('Milk', 2, 'Gallon')