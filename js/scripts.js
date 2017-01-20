$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var num = $("input").val();
    var countList = [1];
    for(var i = 2; i <= num; i++){
      var output = i;

      if(output%3 ===0) {
        output = "Ping";
      } else if (output%5 === 0){
        output = "Pong";
      }
      countList += output;
    }

    alert(countList.split("").join(", "));
    console.log(countList.split("").join(", "));
    $("#output").text(countList);

  })

})
