
let btn = document.getElementById("showMore");
let pictures = document.getElementsByClassName("portfolio-extra");

btn.onclick = function() {
    btn.classList.toggle("show-elements");

    if (btn.classList.contains("show-elements")) {
        btn.innerText = "Show Less";
    
        Array.from(pictures).forEach(ele => {
            ele.classList.remove("extra-content");
        });
        
    } else {
        btn.innerText = "Show More";
        
        Array.from(pictures).forEach(ele => {
            ele.classList.add("extra-content");
        });
    }
}
