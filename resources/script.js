window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").style.boxShadow = "0 5px 10px grey";
    } else {
        document.getElementById("navbar").style.boxShadow = "none";
    }
});