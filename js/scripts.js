$(document).ready(function() {


  $("#gameplay").submit(function(event) {
    event.preventDefault();
    alert("hello");
    var inputNumber = parseInt($("#inputNumber").val());
    var outputNumber = pingPong(inputNumber);
      for(index=0; index<inputNumber; inputNumber++){
        $("#displayOutput").append("<li>" + outputNumber[i] + "</li>");
      }
  });

  $("#about").click(function() {
    $(".about").show();
  });
});
