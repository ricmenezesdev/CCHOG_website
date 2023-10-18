
    function menuButton() {
        event.stopPropagation();
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    window.addEventListener("click", function(event) {
            
        if (!event.target.matches(".dropbtn") && !event.target.matches(".fa-bars")) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                   openDropdown.classList.remove("show");
                }
            }
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
        let slideIndex = 1;
        showSlides(slideIndex);
        autoSlide();
     
        let slideshowContainers = document.getElementsByClassName("slideshow-container");
        for (let i = 0; i < slideshowContainers.length; i++) {
            slideshowContainers[i].addEventListener("mouseover", stopAutoSlide );
            slideshowContainers[i].addEventListener("mouseout", startAutoSlide);
        
    }
    });

    let slideIndex = 1;
    let slideInterval;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    
    function autoSlide() {
        slideInterval = setInterval(function() {
            plusSlides(1); 
        }, 5000); 
    }

    function stopAutoSlide(){
        clearInterval(slideInterval);
    }

    function startAutoSlide(){
        autoSlide();
    }