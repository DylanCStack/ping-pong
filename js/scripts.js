// business logic
function getPingPongCount(input){
  var countList = ["1"];
  for(var i = 2; i <= input; i++){
    var output = i;

    if(output%3 ===0 && output%5 ===0) {
      output = "Ping-Pong";
    } else if (output%5 === 0){
      output = "Pong";
    } else if (output%3 === 0){
      output = "Ping";
    }
    countList += ", " + output;
  }
  return countList;
}


// user interface logic
$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    
    var inputtedNumber = $("input").val();
    var output = getPingPongCount(inputtedNumber);

    $("#output").text(output);
  });
});
