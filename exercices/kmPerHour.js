// 1 litro -> 12km
// 115km  -> X litros

function calcKmPorLitro(qntKm) {
    const kmPorLitro = 12;
    const qntTotalEmLitros = qntKm / kmPorLitro;

    console.log("Voce precisa adicionar:", qntTotalEmLitros, "L");
}

calcKmPorLitro(115);
