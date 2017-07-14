$(document).ready(function() {


  $("#gameplay").submit(function(event) {
    event.preventDefault();


  });
});

var items = ["item1", "item2", "item3", "item4", "item5"]
var itemVals = items.map(function(item) {
  return $("#"  + item).val().toUpperCase();
});
itemVals.sort();
itemVals.forEach(function(itemVal){
  $(".checkout-items").append("<li>" + itemVal + "</li>");
});
$("#grocery-list").show();
$("#grocery-list").show();
