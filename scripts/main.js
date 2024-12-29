/* aaaaaaaaaaa   */

const host = window.location.hostname;
var rootPath = "/MostlyUnwind/";
if(host == "127.0.0.1"){
    rootPath = "/";
}

function stringToHash(string) {

    let hash = 0;

    if (string.length == 0) return hash;

    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}

let clight_mode = localStorage.getItem("light_mode")
if (clight_mode == "light") {
    document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/computer_bg_light.png)";
    document.getElementById("light").src = rootPath + "img/moon.png";
}else if (clight_mode == "dark") {
    document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/computer_bg_dark.png)";
    document.getElementById("light").src = rootPath + "img/sun.png";
}else{
    localStorage.setItem("light_mode", "dark");
}

function toggle_menu() {
    let dropdown = document.getElementById("menu");
    let burger = document.getElementById("burger");

    let rot = burger.style.rotate;

    if(rot == "90deg"){
        dropdown.style.display = "none";
        burger.style.rotate = "0deg";

    }else{
        dropdown.style.display = "flex";
        dropdown.style.justifyContent = "center";
        dropdown.style.flexDirection = "column";

        burger.style.rotate = "90deg";
    }
}

function change_light_mode() {
    clight_mode = localStorage.getItem("light_mode");
    if (clight_mode == "light") {
        localStorage.setItem("light_mode", "dark");
        document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/computer_bg_dark.png)";
        document.getElementById("light").src = rootPath + "img/sun.png";

        let rdm = Math.floor(100*Math.random());
        if(rdm == 1){
            document.getElementById("light").src = rootPath + "img/herobrine.png";
            document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/secret_bg.png)";
        }
        
    }else if (clight_mode == "dark") {
        localStorage.setItem("light_mode", "light");
        document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/computer_bg_light.png)";
        document.getElementById("light").src = rootPath + "img/moon.png";
    }else{ /* in case something happened */
        localStorage.setItem("light_mode", "light");
    }
}