/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var $navBar = document.getElementById("myTopnav");
  var $crossIcon = document.getElementById("icon-navbar");
  if ($navBar.className === "topnav") {
    $navBar.className += " responsive";
    $crossIcon.className = "fa fa-times";
    $crossIcon.innerText = "";
  } else {
    $navBar.className = "topnav";
    $crossIcon.className = "fa fa-bars";
    $crossIcon.innerText = " MENU";
  }
}
