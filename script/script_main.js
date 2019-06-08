
//Burger Menu Function

(function() {
 
    "use strict";
   
    var toggles = document.querySelectorAll(".menu");
    var sh = document.querySelectorAll(".show-hidden");
   
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
   
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        if(this.classList.contains("is-active") === true){
        this.classList.remove("is-active");        
      }
        else
        {this.classList.add("is-active");}
      
      });
    }
   
  })();



  $(".menu").click(function() {
    $(".menu").toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });


  // Navigation



/*
$(document).ready(function(divID){
  $("button").click(2000, function(){
      if($(this).is(':visible')){
          $("#" + divID).slideDown("slow");
      }
      else
      $("#" + divID).sl("slow");
  });
});


$(".btn-slide").click(function(){
      $("#panel").slideToggle("slow");
      $(this).toggleClass("active");
  });*/