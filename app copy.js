const switchColor = document.getElementsByClassName('image-hero');

// switchColor.addEventListener('resize', resize);

function resize(){
    if ($(switchColor).width() < 768) { 
    //   $(".image-hero img").attr('src', '../starter-code/assets/home/tablet/image-hero-coffeepress.jpg');
    console.log("helloooo");
  } 
  
  
  
//   else {
//     $(".image-hero img").attr('src', '../starter-code/assets/home/desktop/image-hero-coffeepress.jpg');
//   }
}
// resize();
// $(window).on('resize', resize);