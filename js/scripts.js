$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var num = $("input").val();
    var countList = [1];
    for(var i = 2; i <= num; i++){
      var output = i;
      countList += output;

      $("#output").text(countList.join(", "));
    }

    alert(countList);


  })

})
