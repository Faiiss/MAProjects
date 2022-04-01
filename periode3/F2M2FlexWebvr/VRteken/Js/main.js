const redSphere = document.getElementById("js--sphere-red");
const greenSphere = document.getElementById("js--sphere-green");
const blueSphere = document.getElementById("js--sphere-blue");
const cursor = document.getElementById("js--cursor");


//spheres
const spheres = document.getElementsByClassName("js--sphere");
for(let i = 0; i < spheres.length;  i++){
    spheres[i].onmouseleave = function(){
        cursor.setAttribute("color", )
    }
}

//boxes
const boxes = document.getElementsByClassName("js--box");
for(let i = 0; i < boxes.length;  i++){
    boxes[i].onmouseenter = function(){
        boxes[i].setAttribute("color", cursor.getAttribute("color"))
    }
}
   
