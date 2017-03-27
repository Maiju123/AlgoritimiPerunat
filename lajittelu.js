
//ensin generoidaan data käyttäjän määrittämän arvon mukaan
var form = document.getElementById('form');
    number = document.getElementById('number');
form.onsubmit = function(e) {
    e.preventDefault()
   var variable = number.value;
//   alert( variable ); 
    
//Kuplalajittelun data
var arr = [];
for(var i=1; i<=variable; i++) {
     var x = Math.floor((Math.random() * 100) + 1);
    //console.log(x);
    arr [i] = x;
}
  
  console.log(arr);
    

//Shell-lajittelun data
    var arr2 = [];
for(var i=1; i<=variable; i++) {
     var x = Math.floor((Math.random() * 100) + 1);
    //console.log(x);
    arr2 [i] = x;
}
  console.log(arr2);
    


      
    
//KUPLALAJITTELU    
function bubbleSort(arr)
{   
    var start = new Date().getTime();
    
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    var elapsedBubble = new Date().getTime() - start;
    console.log("bubblesort aika millisekunteina: " + elapsedBubble);
    document.getElementById("kuplaAika").innerHTML=elapsedBubble;
}

 // Shell lajittelu
function shellSort(arr) {
    var start = new Date().getTime();
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
    var elapsedShell = new Date().getTime() - start;
    console.log("Shell sort aika millisekunteina: " + elapsedShell);
    document.getElementById("shellAika").innerHTML=elapsedShell;
  return arr;  
}
    
    
    
 
bubbleSort(arr);
console.log(arr); 
shellSort(arr2)
console.log(arr2); 
    
    
    
}