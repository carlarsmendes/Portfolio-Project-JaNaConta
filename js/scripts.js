/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

let $menuIcon = document.getElementById("icon-navbar");

function myFunction() {
  var $navBar = document.getElementById("myTopnav");
  var $crossIcon = document.getElementById("icon-navbar");

  var $buttonCTA = document.getElementById("cta-entrar");

  console.log($navBar);
  if ($navBar.className === "floating-fixed-element topnav") {
    $navBar.className += " responsive";
    $buttonCTA.className += " responsive";
    $crossIcon.className = "fa fa-times";
    $crossIcon.innerText = "";
    console.log("enter the if");
    console.log("$navBar.className-->", $navBar.className);
    //Target all the links
    let links = $navBar.getElementsByTagName("a");
    // links.forEach(elem => {
    //   elem.addEventListener("click", event => {
    //     $navBar.className = "floating-fixed-element topnav";
    //     $crossIcon.className = "fa fa-bars";
    //     $crossIcon.innerText = " MENU";
    //   });
    // });
    for (let i = 0; i < links.length; i++) {
      let elem = links[i];
      elem.addEventListener("click", () => {
        $navBar.className = "floating-fixed-element topnav";
        $buttonCTA.className = "button";
        $crossIcon.className = "fa fa-bars";
        $crossIcon.innerText = "";
      });
      //   // elem.onclick =
    }
  } else if (($navBar.className = "floating-fixed-element topnav")) {
    $navBar.className = "floating-fixed-element topnav";
    $buttonCTA.className = "button";
    $crossIcon.className = "fa fa-bars";
    $crossIcon.innerText = "";
    console.log("enter the else");
  }
}

$menuIcon.addEventListener("click", myFunction);

var $navBar = document.getElementById("myTopnav");
console.log($navBar.className);
