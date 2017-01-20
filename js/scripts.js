$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var num = $("input").val();
    var countList = ["1, "];
    for(var i = 2; i <= num; i++){
      var output = i;

      if(output%3 ===0 && output%5 ===0) {
        output = "Ping-Pong";
      } else if (output%5 === 0){
        output = "Pong";
      } else if (output%3 === 0){
        output = "Ping";
      }
      countList += output + ", ";
    }

    alert(countList.split("").join(", "));
    console.log(countList.split("").join(", "));
    $("#output").text(countList);

  })

})
