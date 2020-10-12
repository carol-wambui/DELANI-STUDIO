$(".design").click(function () {
    $(".design").hide();
    $(".design-p").show();
})
$(".design-p").click(function () {
    $(".design-p").hide();
    $(".design").show();
})
$(".development").click(function () {
    $(".development").hide();
    $(".development-p").show();
})
$(".development-p").click(function () {
    $(".development-p").hide();
    $(".development").show();
})
$(".product").click(function () {
    $(".product").hide();
    $(".product-p").show();
})
$(".product-p").click(function () {
    $(".product-p").hide();
    $(".product").show();
})

$("button").click(function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    if (name === "") {
      alert("Please Insert your name")
    } else if (email === "") {
      alert("Enter your Email")
    } else if (comment === "") {
      alert("Please insert your message!")
    } else{
      alert(' Dear ' + name + ' we have received your message successfully. ' + ' Feel free to reach out to us at anytime');
    }
  });
  
$(document).ready(function(){
    $("#p4").hide();
    $("#img4").hover(function(){
        $(this).find("#p4").toggle();
    });

});
$(document).ready(function(){
    $("#p3").hide();
    $("#img3").hover(function(){
        $(this).find("#p3").toggle();
    });

});
$(document).ready(function(){
    $("#p2").hide();
    $("#img2").hover(function(){
        $(this).find("#p2").toggle();
    });
});
$(document).ready(function(){
    $("#p1").hide();
    $("#img1").hover(function(){
        $(this).find("#p1").toggle();
    });
});
$(document).ready(function(){
    $("#p5").hide();
    $("#img5").hover(function(){
        $(this).find("#p5").toggle();
    });
});
$(document).ready(function(){
    $("#p6").hide();
    $("#img6").hover(function(){
        $(this).find("#p6").toggle();
    });
});
$(document).ready(function(){
    $("#p7").hide();
    $("#img7").hover(function(){
        $(this).find("#p7").toggle();
    });
});
$(document).ready(function(){
    $("#p8").hide();
    $("#img8").hover(function(){
        $(this).find("#p8").toggle();
    });
});
$(document).ready(function(){
    $("#p9").hide();
    $("#img9").hover(function(){
        $(this).find("#p9").toggle();
    });
});