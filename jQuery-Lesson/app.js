$(function () {
  $(".box1").slideDown(function (){
    $(".box1").css({
      "background-color": "#0000ff",
      'width': '200px',
      'height' : '100px'
    }).slideUp();
  });
});
