//PASSO 1 separar os numeros repetidos dos não repetidos
//PASSO 2 verificar se o numero repetido é igual aos outros
//PASSO 3 excluir o numero repetido
//PASSO 4 retornar os numeros não repetidos e dizer quantos foram deletados
var numbers = [8, 7, 55, 1, 3, 1, 4, 5, 66, 7, 66, 1300, 1, 5];
var deletedCount = 0;
numbers.sort(function (a, b) { return a - b; });
var i;
for (i = 0; numbers.length > i; ++i) {
    if (numbers[i] == numbers[i + 1]) {
        numbers.splice(i, 1);
        deletedCount++;
    }
}
console.log(numbers);
console.log("numeros deletados:", deletedCount);
