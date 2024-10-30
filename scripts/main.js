/* biscuits */

let clight_mode = get_cookie("light_mode")
if (clight_mode == "light") {
    document.getElementById("body").style.backgroundImage = "url(img/computer_bg_light.png)";
    document.getElementById("light").src = "img/moon.png"
}else if (clight_mode == "dark") {
    document.getElementById("body").style.backgroundImage = "url(img/computer_bg_dark.png)";
    document.getElementById("light").src = "img/sun.png"
}else{
    document.cookie = "light_mode=light; path=/; expires=Thu, 18 Dec 3013 12:00:00 UT"
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
        document.cookie = "light_mode=dark; path=/; expires=Thu, 18 Dec 3013 12:00:00 UT";
        document.getElementById("body").style.backgroundImage = "url(img/computer_bg_dark.png)";
        document.getElementById("light").src = "img/sun.png";

        let rdm = Math.floor(100*Math.random());
        if(rdm == 1){
            document.getElementById("light").src = "img/herobrine.png";
            document.getElementById("body").style.backgroundImage = "url(img/secret_bg.png)";
        }
        
    }else if (clight_mode == "dark") {
        document.cookie = "light_mode=light; path=/; expires=Thu, 18 Dec 3013 12:00:00 UT";
        document.getElementById("body").style.backgroundImage = "url(img/computer_bg_light.png)";
        document.getElementById("light").src = "img/moon.png";
    }else{ /* in case something happened */
        document.cookie = "light_mode=light; path=/; expires=Thu, 18 Dec 3013 12:00:00 UT";
    }
}