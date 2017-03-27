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
    

//TOINEN TAULUKKO pikalajittelulle
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
}

 // PIKALAJITTELU   
function  quickSort(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);  
	/* partition */
	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)
		i++;
		while (parseInt(arr[j]) > pivot)
			j--;
		if (i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}

	/* recursion */
	if (left < j)
		quickSort(arr, left, j);
	if (i < right)
		quickSort(arr, i, right);
	return arr;
}
    
    
    
 
bubbleSort(arr);
console.log(arr); 
quickSort(arr2);
console.log(arr2); 
    
    
    
}