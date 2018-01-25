var title = document.querySelectorAll(".accordion .title");
var content = document.querySelectorAll(".content");

for (i = 0; i < title.length; i++) {
    title[i].addEventListener("click", function () {
        var active = document.querySelector(".accordion .active");
        if (active != null && active != this.parentNode) {
            active.classList.remove("active");
        }
        this.parentNode.classList.toggle("active");
    });
}