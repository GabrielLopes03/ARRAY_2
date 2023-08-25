/* let meuArray = ['Gabriel', 'Bruno', 'Murillo', 23, 49];

meuArray.unshift("SCCP", "Timao", "Coringão", "Time do povo", "Todo poderoso");
console.table(meuArray); */



/* frutas.splice(0,1);
console.table(frutas)
frutas.splice(0,1,"Jaca");
console.table(frutas) */

/* let posicao = frutas.indexOf("Manga");

console.log("Posição da Manga: " + posicao);

frutas.splice(3,1, "------");
console.table(frutas); */

/* console.table(frutas)
frutas.sort() */

/* console.table(frutas)
console.log("Tamanho da matriz: " + frutas.length) */

/* function somaArray(val1, val2, val3){
   let resp = val1 + val2 + val3
    return resp
}
let x = somaArray(65,3,236)
console.log("Resultado da soma: " + x) */

/* function mediaNota(x1,x2,x3,x4) {
    return (x1 + x2 + x3 + x4)/4;
}
e = mediaNota(5.5,6.5,9.0,8.5)
console.log("Media : " + e) */

function somarArray(x) {
    let soma = 0;

    for (let a = 0; a < x.length; a++) {
        soma += x[a];
        media = soma/5
    } 

    return media;
}
let pezinho = [45, 32, 67, 2134, 643];
let resultado = somarArray(pezinho);

console.log("Tamanho da Matriz : " + pezinho.length);
console.log("Resultado da soma : " + resultado)