console.log("Script is geladen!")

const groentenvak = document.getElementById('Groente');
const fruitvak = document.getElementById('Fruit');

function zetInFruitla(Fruit){
    console.log(Fruit);

    const nieuwElement  = document.createElement('h2');
    nieuwElement.innerHTML = Fruit;
    fruitvak.appendChild(nieuwElement);
}

function zetInGroentela(Groente){
    console.log(Groente);

    const nieuwElement  = document.createElement('h2');
    nieuwElement.innerHTML = Groente;
    groentenvak.appendChild(nieuwElement);
}