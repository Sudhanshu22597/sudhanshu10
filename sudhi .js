var i = 0;
var txt1 =
  "Hey Babium......!  <<              we have years of memories <<<                years of loving you. . . .                                                                           > elation that ur text generates. < you are special to me infact everything to me  <<                 i can't imagine u with anyone else  <<                           sorry for my anger and the disrespect                                                     > This will never happen again                << I Love You khushi. . . . .                                                      > will u forgive me? ";
var speed = 55;

typeWriter();

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
