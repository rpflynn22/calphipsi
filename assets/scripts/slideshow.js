$(document).ready(function() {

  // find slideshow
  var slideshow = $("#slideshow");

  var imgs = $("#slideshow img");
  imgs.each(function(){
        $(this).hide(0);
    }); 

  slideshow.prepend($("<div id='display'></div>")) 
  display = $("#display");
  
  // initialize first image
  img = imgs[0];
  $(display).prepend($(img));
  $(img).show();

  // start loop
  var i = 1;
  var cycle = setInterval(function () {
        $(img).fadeOut(800);

        
        //$(display).empty();
        img = imgs[i];
        $(display).prepend($(img));
        $(img).fadeIn(800);


        // increment pointer, making a pseudo linked list
        if (imgs.length - 1 == i){
        	i = 0;
        } else {
        	i = i + 1;
        }

  },


  	4000);

});