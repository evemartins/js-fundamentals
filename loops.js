function mostraValoresPares() {
    const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

    //console.log(numeros);
    for (let i = 0; i < 100; i = i + 1) {
        //console.log("esse é o i", i);

        // setTimeout(() => {
        const numeroAtual = numeros[i];

        // Se for par, fala q é par
        if (numeroAtual % 2 === 0) {
            console.log("Ele é um numero par", numeroAtual);
        }
        // }, 1000);
    }
}

//mostraValoresPares();
//const idade = 23;
let idade = 23;

function mostrar() {
    // definir valor; condicao; novo valor
    for (let numero = 0; numero < 5000; numero = numero + 1) {
        console.log(numero);
    }
}
mostrar();
