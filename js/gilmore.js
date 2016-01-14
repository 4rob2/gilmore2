$(document).ready(function() {
  $("form#happyquiz").submit(function(event) {
  var ambition=$("select#ambition").val();
  var aggressive=$("select#aggressive").val();

  var result = ["Happy", "Shooter", "Virginia", "Grandma", "Bob", "Otto"];

    if (aggressive === "4" && ambition === "3")
    {
    result=result[0];
    }
    else if (aggressive === "5" && ambition === "5")
    {
    result=result[1];
    }
    else if (aggressive === "2" && ambition === "4")
    {
    result=result[2];
    }
    else if (aggressive === "1" && ambition === "1")
    {
    result=result[3];
    }
    else if (aggressive === "3" && ambition === "2")
    {
    result=result[4];
    }
    else
      {
      result=result[5];
      }

    //$("#quizresult").text(result);
    $("#" + result).show();
    $("#" + result).siblings().hide();

    event.preventDefault();
  });
});
