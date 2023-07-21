
    function menuButton() {
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

    /*
    let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/
