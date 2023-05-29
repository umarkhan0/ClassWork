function apply() {
    var image = document.getElementById("image");
    var btn = document.getElementById("btn");
    if (btn.innerHTML === "ON") {
        image.src = "on.png"
        btn.innerHTML = "OFF"
    } else {
        image.src = "off.png"
        btn.innerHTML = "ON"
    }
}