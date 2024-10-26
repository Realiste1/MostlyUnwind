function toggle_menu() {
    let dropdown = document.getElementById("menu");
    let burger = document.getElementById("burger");

    let rot = burger.style.rotate;

    if(rot == "90deg"){
        dropdown.style.display = "none";
        burger.style.rotate = "0deg"

    }else{
        dropdown.style.display = "flex";
        dropdown.style.justifyContent = "center";
        dropdown.style.flexDirection = "column";

        burger.style.rotate = "90deg"
    }
}