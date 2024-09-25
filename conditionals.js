function alugarPatins(idade) {
    if (idade >= 18) {
        console.log("Pode fazer o aluguel");
    } else {
        console.log("Não poderá alugar");
    }
}

//alugarPatins(18);
//alugarPatins(17);

function qualDiaEHoje(diaAtual) {
    if (diaAtual === "Domingo") {
        console.log("Hoje é final de semana");
    } else if (diaAtual === "Segunda") {
        console.log("Hoje é aniversário");
    } else {
        console.log("Fim de semana");
    }
}

qualDiaEHoje("Domingo");

// Se for dia de aniversario, mostra aniversario, se for semana, se for fim

// Segunda -> Aniversario
//Quarta -> Dia da semana
// Domingo -> Fim de semana

/***********************************************************/

// eu vou receber um objeto e vou verificar se ele é um livro,copo ou um teclado
const idade = "ana";

idade === "tr"; // true or false

function meuObjeto(objeto) {
    if (objeto === "livro") {
        console.log("isso é um livro");
    } else if (objeto === "copo") {
        console.log("isso é um copo");
    } else if (objeto === "teclado") {
        console.log("isso é um teclado");
    } else {
        console.log("item nao reconhecido");
    }
}
meuObjeto();

// Voce vai receber um nome, Theodoro, Heitor, Eduardo
// A menssagem de saída será: Sua idade é
// Se o nome nao for um dos 3, mostra a mensagem: Não é a minha família

// entrada: Heitor | Saída: Sua idade é de 1 ano e 7 meses
