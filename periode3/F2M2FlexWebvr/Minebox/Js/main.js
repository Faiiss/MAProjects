const item = document.getElementById("js--item");
const itemGrabbed = document.getElementById("js--item--grabbed");
itemGrabbed.setAttribute("visible", false);
let grabbed = false;

item.onmouseenter = function(){
    item.setAttribute("visible", false);
    itemGrabbed.setAttribute("visible", true);
    grabbed = true;
}

const yellowSpheres = document.getElementsByClassName("js--sphere");
const invisibleBox = document.getElementById("js--invisible--box"); 
for(let i = 0; i < yellowSpheres.length; i ++){
    yellowSpheres[i].onmouseenter = function(){
        if(yellowSpheres[i].getAttribute("visible") === false || grabbed === false)
        {
            return;
        }

    let position = yellowSpheres[i].getAttribute("position");
    position.y = position.y + 1;
    yellowSpheres[i].setAttribute("visible", false);
    invisibleBox.setAttribute("position", position);
    invisibleBox.setAttribute("visible", true);
    itemGrabbed.setAttribute("visible", false);
    grabbed = false;
    }
}
