function toggle(){
    let imageContainer = document.getElementById("imageContainer");

    if (imageContainer.style.display !== "grid") {
        imageContainer.style.display = "grid";
    }
    else {
        imageContainer.style.display = "none";
    }
}

let item = [];

let btn = document.getElementById("btn");
btn.addEventListener("click", toggle);