var slider;
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
// var player,
//  youtubePlayers = [];
  
// Replace the "ytplayer" element with an <iframe> and
// YouTube player after the API code downloads.
// function onYouTubePlayerAPIReady() {
//     player = new YT.Player("youtube", {
//                             height: "281",
//             width: "600",
//             videoId: "lTTajzrSkCw",
//             playerVars: {  "controls": 0 , "rel": 0 , "showinfo": 0 , "mute": 1 , "modestbranding": 1},
//             events: {
//                     "onStateChange": onPlayerStateChange
//             }
//     });
//     youtubePlayers[0] = player;
// }
  
// function pausePlayers() {
//     var i = 0;
//     for (i; i < youtubePlayers.length; i+=1) {
//             // YouTube videos
//             youtubePlayers[i].pauseVideo();
//     }
// }
  
  
    // function onPlayerStateChange(event) {
  
    // if(event.data == YT.PlayerState.ENDED){
    //     player.seekTo(0);
  
    // }
    // }
  
  
    // Setup the slider control
    $(window).on('load', function(){
       slider = $(".flexslider")
            .flexslider({
                animation: "slide",
//                      easing: "swing",
                    slideshowSpeed: 3000,
                    animationSpeed: 200,
                    controlNav: true,
                    pauseonHover: true,
                    animationLoop: true,
                    slideshow: true,
                    useCSS: false
//                  Before you go to change slides, make sure you can!
//                 
                                        //use the below key object pair if you want to add a video and have the video pause while slider is on an img.
            // after: function(){
//             var active_id = $(".flex-active-slide").attr("id");
  
//         //play video and pause the slider
// // if (active_id.substring(0,3) == "vid"){
// //     player.playVideo();
  
// // }
//             if(active_id.substring(0,3) == "img"){
//                 pausePlayers();
  
//             }
//     }
  
  
        }); //end .flexslider
      }); //end $(window).on
  // $("#vidplay").on("mouseover", function(){
  //       //player.playVideo();
  //       $(".flexslider").flexslider("pause");
  
  //   });
  //       $("#vidplay").on("mouseout", function(){
  //           //player.pauseVideo();
  //         $(".flexslider").flexslider("play");
  //       });
  
    // slider.on("click", ".flex-prev, .flex-next, .flex-control-nav", function(){
    //     canSlide=true;
    //         $(".flexslider").flexslider("play");
    // });