
let btn = document.getElementById("showMore");
let pictures = document.querySelectorAll(".portfolio-extra");

btn.onclick = function() {
    btn.classList.toggle("show-elements");

    if (btn.classList.contains("show-elements")) {
        btn.innerText = "Show Less";
    
        pictures.forEach(ele => {
            ele.classList.remove("extra-content");
        });
        
    } else {
        btn.innerText = "Show More";
        
        pictures.forEach(ele => {
            ele.classList.add("extra-content");
        });
    }
}
