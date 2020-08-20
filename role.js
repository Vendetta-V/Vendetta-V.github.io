/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function resizeFunction() {
  let topNav = document.getElementById("topnav");
  if (topNav.className === "topnav") {
    topNav.className += "responsive";
  } else {
    topNav.className = "topnav";
  }
}
