// $(document).ready(function () {
//     $(window).on("scroll", function () {
//       if ($(this).scrollTop() < $('#test').offset().top - 70 &&  $(this).scrollTop() > 200) {
//         $("#left").addClass("fixed-top1");
//       } else {
//         $("#left").removeClass("fixed-top1");
//       }
//     });
// });

$(document).ready(function () {

  $(window).on("scroll", function () {
    if ($(this).scrollTop() < $('#test').offset().top - 300 ) {
      $("#left").fadeIn();
    } else {
      $("#left").fadeOut();
    }
  });


  $("div.mini img").click(function() {
    $("#Main").attr("src" , $(this).attr('src'));
})


});
window.onscroll = function() {
    console.info(document.documentElement.scrollTop);
    var nav = document.getElementById("mynav");
    var gogo = document.getElementById("letgo");
    if(document.documentElement.scrollTop > 85 || document.body.scrollTop > 100){
        nav.style.position ="fixed";
        nav.style.top = 0;
        nav.style.left = 0;
        nav.style.right = 0;
        nav.style.backgroundColor ="black";
        nav.style.zIndex = 99;
        nav.style.opacity = .6;

        gogo.style.display = "block";
        gogo.style.zIndex = 99;
        gogo.style.opacity = .6;
    } else{
        nav.style.position = " relative";
        nav.style.opacity = 1;

        gogo.style.display ="none"
    }
}

function gotop() {
    var timer = setInterval(function(){
        document.documentElement.scrollTop -= 25;

        if(document.documentElement.scrollTop <= 0)
            clearInterval(timer);
    }, 5);
} 

function checkemail(){
  var form = document.getElementById("form-email");
  var email = document.getElementById("email");
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email.match(pattern))
  {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML ="You Email Address in Valid.";
    text.style.color ="green";
  } 
  else
  {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "red";
  }
}



