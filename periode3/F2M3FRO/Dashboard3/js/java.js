// dit is label van het chart doughnut 
// hier hebben we list gegevens opgeslagen die we te zien krijgen op het browser.
const labels = [
    "Playststion 2",
        "Ps4 pro",
        "PC games",
        "Playstore",
        "Xbox",
      ];
    // hier hebben we een variable aangemaakt dat data heet,
    // en in die data hebben we de labels variable die we eerder hebben gemaakt opgeslagen,
    // nu hebben we een datasets gemaakt en in die datasets zit er gegevens label, data, backgroundcolor en dat laat de metingen zien,
    // om de datasets gegevens te krijgen hebben we aangesloten met de labels variable die we eerder hebben,
    // gemaakt en daar door kunnen de gegevens metingen te zien
    // en dan hadden we een backgroundcolor gemaakt dat aangesloten is met de data metingen dat elke meting krijgt een eigendom kleur,
    // dat niet op de anderen lijkt 
      const data = {
        labels: labels,
        datasets:[
            {
                label: "My gaming live experience",
                data:[3000, 10000, 6000, 700, 300],
                backgroundColor: ['#13377d','#99e3e6','#eb5d0f','#a843ea','#269733'],
            }
        ]
    }

    // hier hebben we een nieuwe variable aangemaakt dat de type van de chart laat zien,
    // en de data variable gegevens opslaat op de nieuwe variable
    
      const config = {
        type: 'doughnut',
        data: data,
      }
// dit variable laat de gegevns op het scherm te zien met id js--chart-1 die we hadden gemaakt,
// dus om de gegevens op het scherm te krijgen hebben we nu js--chart-1 aangesloten,
// op config variable om de gegevens volledig te krijgen. 
new Chart(document.getElementById("js--chart-1"),config);

const labels4 = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data4 = {
  labels: labels4,
  datasets: [{
    label: 'Random Chart',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const config4 = {
  type: 'line',
  data: data4,
  options: {}
};

new Chart(document.getElementById("js--chart-4"),config4);

// Pokimon API ophalen met function.

// hier hebben we een functie gecreeerd,
// en in die functie hebben we een variabelen gemaakt voor de types Pokimon API die precies het zelfde zijn,
// en de waarden van dat variable begint met 0,
// de labels variable die we eerder hebben gemaakt,
// slaan we op met de 20 types variabelen die we hebben gemaakt als waarde.
function krijg_pokimon(){
      // begin variabalen
      let normal = 0, 
      fighting = 0, 
      flying = 0, 
      poison = 0, 
      ground = 0, 
      rock = 0, 
      bug = 0, 
      ghost = 0, 
      steel = 0, 
      fire = 0, 
      water = 0, 
      grass = 0, 
      electric = 0, 
      psychic = 0, 
      ice = 0, 
      dragon = 0, 
      dark = 0, 
      fairy = 0, 
      unkwown = 0, 
      shadow = 0;
      // einde variabalen
      // labels aanmaken
      const labels = ['normal',
      'Fighting',
      'Flying',
      'Poison',
      'Ground',
      'Rock',
      'Bug',
      'Ghost',
      'Steel',
      'Fire',
      'Water',
      'Grass',
      'Electric',
      'Psychic',
      'Ice',
      'Dragon',
      'Dark',
      'Fairy',
      'Unkwown',
      'Shadow'];
    // einde lables
    // we hebben for loop gemaakt om de opdrachten die we aangeven 1 voor 1 uit te voeren.
    // in de for loop hebben we varaible aangemaakt dat begin_getallen heet en zijn eerste waarde is 0,
    // we hebben de begin_getallen vergeleken  met 10; en dan hebben gezegd elke keer op dit variable getal bijkomt.
    // nu hebben we nu variable gemaakt dat toevallig_nummer het, en om de getallen/cijfers random te maken met de Pokimon api nummers. 
    // en hebben een andere variable gemaakt API link gegevens te fetch/gegevens ophalen en we hebben met de toevallig_nummer variable gecombineerd.
  for(begin_getallen = 0; begin_getallen < 10; begin_getallen++){
    let toevallig_nummer = Math.floor(Math.random() * 500 + 1);
    let Pokimon_ophalen = fetch("https://pokeapi.co/api/v2/pokemon/" + toevallig_nummer)
    // en daarna hebben een callback aangemaakt en in die callback hebben functie gemaakt,
    // met dat functie hebben een de gegevens die we opgehaalt hebben opgeslagen met de data_opslag, 
                        .then( function(data_opslag){
                            return data_opslag.json();
                        })
    // en we hebben nog een keer een  callback aangemaakt,
    // en in die  callback hebben we functie gemaakt en in die functie hebben,
    // de Pokimon_opahalen variable opgeroepen. 
                        .then(function(Pokimon_ophalen){
                          // na data we de Pokimon_opahalen hebben opgeroepen,
                          // hebben we In dit  geval van een switch gemaakt,
                          // met de switch wordt de ene vase/case naar het andere uitgevoerd tot,
                          // dat het break-sleutelwoord niet wordt gevonden,
                          // of de standaard-instructie wordt uitgevoerd. 
                          // in de switch case/zaken zitten er 20 variabelen die hij 1 op de andere uitvoert. 
                          switch(Pokimon_ophalen.types[0].type.name){
                              case 'normal':
                                normal = normal + 1;
                                break;
                              case 'fighting':
                                fighting = fighting + 1;
                                break;
                              case 'flying':
                                flying = flying + 1;
                                break;
                              case 'poison':
                                poison = poison + 1;
                                break;
                              case 'ground':
                                ground = ground + 1;
                                break;
                              case 'rock':
                                rock = rock + 1;
                                break;
                              case 'bug':
                                bug = bug + 1;
                                break;
                              case 'ghost':
                                ghost = ghost + 1;
                                break;
                              case 'steel':
                                steel = steel + 1;
                                break;
                              case 'fire':
                                fire = fire + 1;
                                break;
                              case 'water':
                                water = water + 1;
                                break;
                              case 'grass':
                                grass = grass + 1;
                                break;
                              case 'electric':
                                electric = electric + 1;
                                break;
                              case 'psychic':
                                psychic = psychic + 1;
                                break;
                              case 'ice':
                                ice = ice + 1;
                                break;
                              case 'dragon':
                                dragon = dragon + 1;
                                break;
                              case 'dark':
                                dark = dark + 1;
                                break;
                              case 'fairy':
                                fairy = fairy + 1;
                                break;
                              case 'unkwown':
                                unkwown = unkwown + 1;
                                break;
                              case 'shadow':
                                shadow = shadow + 1;
                                break;
                          }                   
                        })
      // nu hebben we een nieuwe callback gemaakt met function,
      // in de function hebben we data_Pokimon variable opgeroepen, die eerder de Pokimon API types de variabelen hebben gemaakt.
                        .then(function(){
                          // met de data_pokimon hebben de gegevens in de datasets opgehaalt, begint met [0]/1 met de data tot met [19]/20.
                          data_Pokimon.datasets[0].data = [
                            normal,
                            fighting, 
                            flying, 
                            poison,
                            ground, 
                            rock, 
                            bug, 
                            ghost,
                            steel, 
                            fire, 
                            water, 
                            grass,
                            electric, 
                            psychic, 
                            ice, 
                            dragon,
                            dark, 
                            fairy, 
                            unkwown, 
                            shadow];
                          graph.update();
                        });
  }

        const data_Pokimon = {
          labels: labels,
          datasets:[
              {
                  label: "Pokemon Types",
                  data: [],
                  backgroundColor: ['#13377d','#99e3e6','#eb5d0f','#a843ea','#269733'],
              }
          ]
      }
      const configPokimon = {
          type: 'bar',
          data: data_Pokimon,
        };
  
      const graph = new Chart(document.getElementById("js--chart-2"), configPokimon);
}

// als we de functie die we gemaakt,
// hebben niet aanroepen krijgen niks te zien op het scherm
// met dit functie krijgen we de chart meting op het browser scherm te zien
krijg_pokimon();


//Stopwatch begin

const startbutton = document.getElementById("js--start");
const stopbutton = document.getElementById("js--stop");
const resetbutton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");


let timer;

startbutton.onclick = function(){
    if(running === true){
        return;
    }
    running = true
    timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds == 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        } 
        secondsTimer.innerText = seconds;
    }, 1000); /* dit is in ms 1000 ms is 1 sec*/
}
stopbutton.onclick = function(){
    clearTimeout(timer);
    running = false
}

resetbutton.onclick = function () {
    seconds = 0;
    minutes = 0;
    clearInterval(timer);
    running = false
    secondsTimer.innerText = 0;
    minutesTimer.innerText = 0;
}

function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds(); 
  var session = "";

  if(h == 0){
      h = 12;
  }

  if(h > 12){
      h = h - 12;
      session = "";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("DigiKlok").innerText = time;
  document.getElementById("DigiKlok").textContent = time;

  setTimeout(showTime, 1000);

}

showTime();


//Klok

function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds(); 
  var session = "";

  if(h == 0){
      h = 12;
  }

  if(h > 12){
      h = h - 12;
      session = "";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("Klok").innerText = time;
  document.getElementById("Klok").textContent = time;

  setTimeout(showTime, 1000);

}

showTime();


