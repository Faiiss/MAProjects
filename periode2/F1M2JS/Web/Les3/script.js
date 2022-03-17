const Myimage = document.getElementById('Myimage')
const Mytitle = document.getElementById('Mytitle')

let paintings = ["img/painting0.jpg", 
"img/painting1.jpg", 
"img/painting2.jpg",
"img/painting3.jpg",
"img/painting4.jpg",
"img/painting5.jpg"
]

let titles = [
    "De schilderijen van Van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen ",
    "Boerderij in de Provence"
]

function changeImage(index){
    Mytitle.innerHTML = titles[index];
    Myimage.src = paintings[index];
}