const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"#a692f0"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"#fa3df8"
    },
    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "backGround":"#e8d535"
    },
    {
        "titel":"herfst",
        "image":"img/autumn.jpg",
        "backGround":"orange"
    },
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "backGround":"#5c3212"
    }
];

function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}