CREATE TABLE "shopping_list"(
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR (80) NOT NULL,
	"quantity" INTEGER,
	"unit" VARCHAR (20) NOT NULL
);
INSERT INTO "shopping_list" ("name", "quantity", "unit") VALUES ('Banana', '1', 'Banana');