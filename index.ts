//PASSO 1 separar os numeros repetidos dos não repetidos
//PASSO 2 verificar se o numero repetido é igual aos outros
//PASSO 3 excluir o numero repetido
//PASSO 4 retornar os numeros não repetidos e dizer quantos foram deletados
const numbers = [8, 7, 55, 1, 3, 1, 8, 8, 66, 7, 7, 13, 8, 5, 7, 7,7,7,7,7,7, 5];
let deletedCount = 0;
numbers.sort(function(a, b){ return a - b; });
let i: number;
let repeatedIndexsArray: number[] = [];
for (i = 0; numbers.length > i; ++i) {
    console.log(numbers);
    console.log("inicio do loop "+ i);
    for(let j = 0; numbers.length > j; ++j){
        if (numbers[i] == numbers[j] && i != j) {
            console.log("numero repetido: "+ numbers[i] +" == " +numbers[j] + " index: "+j);
            numbers.splice(j, 1);
            if(numbers[j] == numbers[j-1]){
                j--; //se o numero deletado for igual ao anterior, decrementa o index para não pular o proximo numero
            }
            console.log(numbers);
            deletedCount++;
        }else{
            if(i == j){
                console.log("é o mesmo numero, na mesma posição " + numbers[i] +" == "+numbers[j] + " no index: " + j);
            }else{
                console.log("não é repetido " + numbers[i] +" != "+numbers[j] + " no index: " + j);
            }
        }
    }
    console.log("fim do loop "+ i);
}

console.log(numbers);
console.log("numeros deletados:", deletedCount);