var navigationMenu = document.getElementById("navigation");
function myFunction() {
    if (navigationMenu.className === "topnav") {
      navigationMenu.className += " responsive";
    } else {
      navigationMenu.className = "topnav";
    }
  };

