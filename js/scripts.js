/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

let $menuIcon = document.getElementById("icon-navbar");

function myFunction() {
  var $navBar = document.getElementById("myTopnav");
  var $crossIcon = document.getElementById("icon-navbar");
  var $buttonCTA = document.getElementById("cta-entrar");

  if ($navBar.className === "floating-fixed-element topnav slide-in-right") {
    $navBar.className += " responsive";
    $buttonCTA.className += " responsive";
    // $crossIcon.className = "fa fa-times";
    $crossIcon.src = "./images/icon_menu_cross.svg";

    $crossIcon.innerText = "";

    //Target all the links
    let links = $navBar.getElementsByTagName("a");

    for (let i = 0; i < links.length; i++) {
      let elem = links[i];
      elem.addEventListener("click", () => {
        $navBar.className = "floating-fixed-element topnav slide-in-right";
        $buttonCTA.className = "button";
        // $crossIcon.className = "fa fa-bars";
        $crossIcon.src = "./images/icon_menu_hamburguer.svg";

        $crossIcon.innerText = "";
      });
    }
  } else if (
    ($navBar.className = "floating-fixed-element topnav slide-in-right")
  ) {
    $navBar.className = "floating-fixed-element topnav slide-in-right";
    $buttonCTA.className = "button";
     // $crossIcon.className = "fa fa-bars";
     $crossIcon.src = "./images/icon_menu_hamburguer.svg";
    $crossIcon.innerText = "";
  }
}

$menuIcon.addEventListener("click", myFunction);

// var $navBar = document.getElementById("myTopnav");
// var navHeight = $navBar.offsetHeight
// // TRYING THE NAV BAR



// // var arraySections = document.getElementsByTagName("section");
// // console.log(arraySections.length)
// // for(let i = 0; i <= (arraySections.length-1);i++){
// //   arraySections[i].padding = `${navHeight} 10vw`;
// //   // arraySections[i].paddingBottom = navHeight;
// //   console.log(arraySections[i].paddingTop)
// // };