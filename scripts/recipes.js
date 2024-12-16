
function toggle_menu_recipes() {
    let dropdown = document.getElementById("recipes_menu");
    let burger = document.getElementById("burger_recipes");

    let rot = burger.style.rotate;

    if(rot == "90deg"){
        if(innerWidth<=900){
            dropdown.style.display = "none";
            burger.style.rotate = "0deg";

        }

    }else{
        if(innerWidth<=900){
            dropdown.style.display = "flex";
            dropdown.style.justifyContent = "center";
            dropdown.style.flexDirection = "column";

            burger.style.rotate = "90deg";
        }
    }
}