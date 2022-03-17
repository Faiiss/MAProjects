const Mytitle = document.getElementById("Mytitle");
const Myimage = document.getElementById("Myimage");
const Myinput = document.getElementById("Myinput");

let lokaties =[
    {
        "title":"plaats 0",
        "image":"img/0.jpg"
    },
    {
        "title":"plaats 1",
        "image":"img/1.jpg"
    },
    {
        "title":"plaats 2",
        "image":"img/2.jpg"
    },
    {
        "title":"plaats 3",
        "image":"img/3.jpg"
    },
    {
        "title":"plaats 4",
        "image":"img/4.jpg"
    },
    {
        "title":"plaats 5",
        "image":"img/5.jpg"
    },
    {
        "title":"plaats 6",
        "image":"img/6.jpg"
    },
    {
        "title":"plaats 7",
        "image":"img/7.jpg"
    },
    {
        "title":"plaats 8",
        "image":"img/8.jpg"
    },
    {
        "title":"plaats 9",
        "image":"img/9.jpg"
    },
    {
        "title":"plaats 10",
        "image":"img/10.jpg"
    },
    {
        "title":"plaats 11",
        "image":"img/11.jpg"
    }
]

//Mytitle.innerHTML = "dit is door het script toegevoed";
//Myimage.src = "img/1.jpg";

function show(index){
    Mytitle.innerHTML = lokaties[index].title;
    Myimage.src = lokaties[index].image;
}

function getinput(){
    show(Myinput.value);
    //console.log(Myinput.value)
    Myinput.value = "";
    Myinput.focus();
}
