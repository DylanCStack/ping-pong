$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var num = $("input").val();
    var countList = [];
    for(var i = 1; i <= num; i++){
      countList += i;
    }
    alert(countList);



  })

})
