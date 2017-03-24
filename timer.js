  // function timer() {
  
    //   var nappi = document.getElementById("nappi");
       
   // if (nappi.clicked == true) {
    $("#nappi").click(function() {
    
        var start = new Date().getTime();   
        var stop = new Date().getTime();
        var elapsed = stop - start;
  
 // document.getElementById("demo").innerHTML = elapsed;

        $("#aika").append(elapsed + " millisekuntia");

  //  };
//};
});
//timer();



