const button = document.getElementById("js--menu")
const nav = document.getElementById("js--nav")
const body = document.getElementById("js--body")
const close =document.getElementById("js--close")


button.onclick = function() {
    nav.style.visibility="visible"
    nav.style.opacity="1"
    body.style.overflow="hidden"

}

close.onclick = function(){
    nav.style.visibility="hidden"
    nav.style.opacity="0"
    body.style.overflow=""
}