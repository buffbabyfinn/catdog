$(document).ready(function() {

  $("button#cats").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#page").prepend("<li>Bark!!!</li>");

    // $("img#angrydog").append(' <img src="img/angry-dog.jpg"> ');


    });

  $("button#dogs").click(function() {
    $("ul#page").prepend("<li>Bark!</li>");
    $("ul#user").prepend("<li>Meow!!!</li>");

    // $("img#angrycat").append(' <img src="img/angry-cat.jpg"> ');

  });

  });
