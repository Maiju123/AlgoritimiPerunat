   function timer() {
  
        var start = new Date().getTime();   
        var stop = new Date().getTime();
        var elapsed = stop - start;
       var nappi = document.getElementById("nappi");
       
    if (nappi.clicked == true) {
  
  document.getElementById("demo").innerHTML = elapsed;


    };
};



 //function Choice () {
   // var box = document.getElementById("box");
   // var yes = document.getElementById("yes");
   // var no = document.getElementById("no");

   //if (yes.clicked == true) {
     //   box.style.backgroundColor = "red";
   // } else if (no.clicked == true) {
     //   box.style.backgroundColor = "green";
   // } else {
    //    box.style.backgroundColor = "purple";
  //  };
//};

//Choice ();