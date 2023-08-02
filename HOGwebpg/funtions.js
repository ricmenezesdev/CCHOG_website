
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

   
