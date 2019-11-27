/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

let $menuIcon = document.getElementById("icon-navbar");

function myFunction() {
  var $navBar = document.getElementById("myTopnav");
  var $crossIcon = document.getElementById("icon-navbar");

  var $buttonCTA = document.getElementById("cta-entrar");

  console.log($navBar);
  if ($navBar.className === "floating-fixed-element topnav slide-in-right") {
    $navBar.className += " responsive";
    $buttonCTA.className += " responsive";
    $crossIcon.className = "fa fa-times";
    $crossIcon.innerText = "";

    //Target all the links
    let links = $navBar.getElementsByTagName("a");

    for (let i = 0; i < links.length; i++) {
      let elem = links[i];
      elem.addEventListener("click", () => {
        $navBar.className = "floating-fixed-element topnav slide-in-right";
        $buttonCTA.className = "button";
        $crossIcon.className = "fa fa-bars";
        $crossIcon.innerText = "";
      });
    }
  } else if (
    ($navBar.className = "floating-fixed-element topnav slide-in-right")
  ) {
    $navBar.className = "floating-fixed-element topnav slide-in-right";
    $buttonCTA.className = "button";
    $crossIcon.className = "fa fa-bars";
    $crossIcon.innerText = "";
  }
}

$menuIcon.addEventListener("click", myFunction);

var $navBar = document.getElementById("myTopnav");

