$(document).ready(function(){

var $root = $('html, body');
$('#navbar-example a').click(function() {
  var href = $.attr(this, 'href');
  if (href != undefined && href != '#') {
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
  }
  return false;
});
// smooth scrolling
$(function () {
  $('#item1').tooltip();
});
$(function () {
   $('[data-toggle="tooltip"]').tooltip();
 });
 // tooltips
 $('#button').on('click', function() {
   var comment = $('.message-box').val();
   $('#visible-comment').html(comment);

   if(comment === ""){
     $(".message-box").css("border-color", "red");
   }else{
     $('.message-box').hide();
   }

  return false;
});
  $(".message-box").on("keyup", function(){
    console.log("keyup happened");
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html(charCount);

    if(charCount>50){
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");
    }

  });

//projects section
for(var i = 0; i <projects.length; ++i ){
  $("#work").append("\
   <div class='col-sm-6 col-md-4'>\
    <a href='#' class='work-img'>\
     <img class='img-fluid' src='" + projects[i].pic + "'>\
     <span class='info'><p class='proj-title'>Title:</p>" + projects[i].title + "</span>\
    </a>\
   </div>\
 ");
 var images = $("#work img");
 if(i%2 === 0){
   $(images[i]).css("border", "2px solid #007F78");
 } else {
   $(images[i]).css("border", "2px solid #C25809");
};
//Event listeners

$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});

};

});
