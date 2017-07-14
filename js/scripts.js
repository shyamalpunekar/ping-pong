
// business interface
var pingPong = function(inputNumber) {
var playOutcome = [];
  for(index = 0; index <= inputNumber; index++){
    if(index % 3 === 0){
      playOutcome.push("Ping");
    } else if (index % 5 === 0) {
      playOutcome.push("Pong");
    } else if (index % 15 === 0) {
      playOutcome.push("Ping-Pong");
    } else {
      playOutcome.push(index);
    }
    }
    return playOutcome;
}

// User interface
$(document).ready(function() {
  $("#gameplay").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#inputNumber").val());
    var output = pingPong(inputNumber);
      for(index = 1; index <= inputNumber; index++){
        $("#displayOutput").append("<li>" + output[index] + "</li>");
      }

      $("#display").show();
  });

  $("#about").click(function() {
    $(".about").show();
  });
});
