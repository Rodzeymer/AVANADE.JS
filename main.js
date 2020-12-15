/*
var nome="Rodrigo";
var idade=34;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo!"

idade2=n1+n2;

alert(nome + " tem " + idade + " anos.")

alert(idade +idade2);

console.log(nome);

console.log(n1+idade);

console.log(frase.toLowerCase())

alert(frase.replace("Japão", "Brasil"))


alert(nome + " tem idade " + idade);

*/

var lista=["maçã", "pêra", "laranja"];

console.log(lista);

/*console.log(lista[1]);

alert(lista[0]);

lista.push("uva");
console.log(lista);

lista.pop();

console.log(lista);

lista.pop();

console.log(lista);

console.log(lista.length)

console.log(lista.reverse());

console.log(lista.toString());

console.log(lista.join("*-*"));

*/

/*var fruta = {nome: "maça", cor: "vermelha"}

console.log(fruta);

console.log(fruta.nome +", "+ fruta.cor);
*/

/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]

console.log(frutas);

console.log(frutas[1].nome +", "+ frutas[0].cor);

*/

/*var idade  = prompt("Qual a sua idade?");

if (idade>=18){
    alert("Maior de idade");
} else{
    alert("Menor de idade");
}*/

/*var count = 0;

while (count<=5) {
    console.log(count);
    count++;
    
}*/

/*for (let count = 0; count<=5;count++) {
    alert(count);
    
}*/
/*
var d = new Date();
alert(d.getMonth());


function soma(n1, n2){
    return n1+n2
}


function setReplace(frase, nome, novoNome){
    return frase.replace(nome,novoNome)
}

/*alert(setReplace("Vai Japão", "Japão", "Brasil"));
alert(soma(5,10));

function validaIdade(idade){
    var validar;

    if(idade>=18){
        validar = true

    } else{
        validar=false
    }
    return validar
}

*/
/*
var idade = prompt("Qual a sua idade?")

validaIdade;

console.log(validaIdade(idade));
*/
function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("Agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("Agradecimento"));
}

function outraPagina(){
    //window.open("https://www.twitch.tv/kritsugu");
    //window.location.href = "https://www.twitch.tv/kritsugu"

}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar por aqui antes";
    
}

function voltar(elemento){
    elemento.innerHTML = "O mouse saiu do canto!";
    
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}