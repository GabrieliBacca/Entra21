-- CreateTable
CREATE TABLE "Prato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "preco" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Ingrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredienteToPrato" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_IngredienteToPrato_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingrediente" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_IngredienteToPrato_B_fkey" FOREIGN KEY ("B") REFERENCES "Prato" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_IngredienteToPrato_AB_unique" ON "_IngredienteToPrato"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredienteToPrato_B_index" ON "_IngredienteToPrato"("B");
