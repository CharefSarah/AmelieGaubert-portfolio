
                //FONCTION POUR LE SLIDER DU HEADER
(function () {
   
    const images = ["assets/img/slider/1.jpg", "assets/img/slider/2.jpg", "assets/img/slider/3.jpg"];
    let counter = 0;
    let btns = document.querySelectorAll(".btn");
    let image = document.getElementById("image");
    btns.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            let value = event.target;
            if (value.classList.contains("prev")) {
                counter--;
                if (counter < 0) {
                    counter = images.length - 1;
                }
                image.src = `${images[counter]}`;
            }
            if (value.classList.contains("next")) {
                counter++;
                if (counter > images.length - 1) {
                    counter = 0;
                }
                image.src = `${images[counter]}`;
            }
        });
    });
})();


     //FONCTION POUR QUE LA NAV SOIT STICKY ON SCROLL
let sticky = document.querySelector(".navbar")
window.addEventListener('scroll', () => {
    window.scrollY > 100 ? sticky.classList.add("sticky") : sticky.classList.remove("sticky")
})