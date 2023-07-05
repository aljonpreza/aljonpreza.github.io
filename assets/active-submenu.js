const sections = document.querySelectorAll(".post-page div[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
            document.querySelector(".post-role a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".post-role a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}