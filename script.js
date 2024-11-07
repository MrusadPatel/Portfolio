

function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("hidden"); // Toggle the 'hidden' class
    menuItems.classList.toggle("-translate-x-40");
    menuItems.classList.toggle("translate-y-3");
  }

  function toggleSlider() {
    var slider1 = document.getElementById("slider1");
    var slider2 = document.getElementById("slider2");

    if (slider1.classList.contains("hidden")) {
      slider1.classList.remove("hidden");
      slider2.classList.add("hidden");
    } else {
      slider1.classList.add("hidden");
      slider2.classList.remove("hidden");
    }
  }

  setInterval(toggleSlider, 5000); // Switch every 5 seconds

 
