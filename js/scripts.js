
// business interface
var pingPong = function(inputNumber) {
var playOutcome = pingPong.map(function(inputNumber) {
  for(index = 0; index < inputNumber; index++){
    if(index % 3 === 0 && index % 15 !== 0){
      playOutcome.push("Ping");
    } else if (index % 5 === 0 && index % 15 !== 0) {
      playOutcome.push("Pong");
    } else if (index % 15 === 0) {
      playOutcome.push("Ping-Pong");
    } else {
      playOutcome.push(inputNumber);
    }
    }
    return inputNumber;
})
}

// User interface
$(document).ready(function() {
  $("#gameplay").submit(function(event) {
    event.preventDefault();
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
