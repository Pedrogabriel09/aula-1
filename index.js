//PASSO 1 separar os numeros repetidos dos não repetidos
//PASSO 2 verificar se o numero repetido é igual aos outros
//PASSO 3 excluir o numero repetido
//PASSO 4 retornar os numeros não repetidos e dizer quantos foram deletados
var numbers = [8, 7, 55, 1, 3, 1, 8, 8, 66, 7, 7, 13, 8, 5, 7, 7, 7, 7, 7, 7, 7, 5];
var deletedCount = 0;
//numbers.sort(function(a, b){ return a - b; });
var i;
for (i = 0; numbers.length > i; ++i) {
    for (var j = 0; numbers.length > j; ++j) {
        if (numbers[i] == numbers[j] && i != j) {
            numbers.splice(j, 1);
            if (numbers[j] == numbers[j - 1]) {
                j--; //se o numero deletado for igual ao anterior, decrementa o index para não pular o proximo numero
            }
            deletedCount++;
        }
    }
}
console.log(numbers);
console.log("numeros deletados:", deletedCount);
