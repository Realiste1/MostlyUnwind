/* aaaaaaaaaaa   */

const host = window.location.hostname;
var rootPath = "/MostlyUnwind/";
if(host == "127.0.0.1"){
    rootPath = "/";
}

/* document.getElementsByClassName("logo").src = `${rootPath}img/logo.png`;
document.getElementById("stylesheet").href = `${rootPath}css/style.css`; */

/* biscuits */

let clight_mode = get_cookie("light_mode");
if (clight_mode == "light") {
    document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/computer_bg_light.png)";
    document.getElementById("light").src = rootPath + "img/moon.png";
}else if (clight_mode == "dark") {
    document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/computer_bg_dark.png)";
    document.getElementById("light").src = rootPath + "img/sun.png";
}else{
    document.cookie = "light_mode=light; path=/MostlyUnwind/; expires=Thu, 18 Dec 3013 12:00:00 UT; Secure";
}

function get_cookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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
    clight_mode = get_cookie("light_mode");
    if (clight_mode == "light") {
        document.cookie = "light_mode=dark; path=/MostlyUnwind/; expires=Thu, 18 Dec 3013 12:00:00 UT; Secure";
        document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/computer_bg_dark.png)";
        document.getElementById("light").src = rootPath + "img/sun.png";

        let rdm = Math.floor(100*Math.random());
        if(rdm == 1){
            document.getElementById("light").src = rootPath + "img/herobrine.png";
            document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/secret_bg.png)";
        }
        
    }else if (clight_mode == "dark") {
        document.cookie = "light_mode=light; path=/MostlyUnwind/; expires=Thu, 18 Dec 3013 12:00:00 UT; Secure";
        document.getElementById("body").style.backgroundImage = "url(" + rootPath + "img/computer_bg_light.png)";
        document.getElementById("light").src = rootPath + "img/moon.png";
    }else{ /* in case something happened */
        document.cookie = "light_mode=light; path=/MostlyUnwind/; expires=Thu, 18 Dec 3013 12:00:00 UT; Secure";
    }
}