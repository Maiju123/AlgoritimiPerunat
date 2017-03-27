//lajittelija





//ensin generoidaan data käyttäjän määrittämän arvon mukaan
var form = document.getElementById('form');
    number = document.getElementById('number');
form.onsubmit = function(e) {
    e.preventDefault()
   var variable = number.value;
//   alert( variable );   
var arr = [];
for(var i=1; i<=variable; i++) {
     var x = Math.floor((Math.random() * 100) + 1);
    //console.log(x);
    arr [i] = x;
}
  
  console.log(arr);
    
    
    //bubble
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
     console.log(arr);
    return arr;
   
};
}