$(document).ready(function(){
  $(".advanced_button").click(function(){
    $(".advanced_search").slideToggle().css("display", "flex");
  });
  $(".advanced_button_small").click(function(){
    $(".advanced_search").slideToggle().css("display", "flex");
  });
  $(".desc").click(function(event){
    $(this).siblings(".course_description").slideToggle().css("display", "flex");
    event.stopPropagation();
  });
});
