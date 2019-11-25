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

// -------ADDING SMOOTH SCROLLER CROSS-BROWSERS

// $(document).ready(function() {
//   // Add smooth scrolling to all links
//   $("a").on("click", function(event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top
//         },
//         800,
//         function() {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         }
//       );
//     } // End if
//   });
// });
