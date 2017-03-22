//Pikalajittelu funktio, oikea vasen
function quickSort(arr, left, right) {
    var len = arr.length,
        pivot,
        partitionIndex;
    // Onko vasen pienempi kuin oikea? 

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //lajittele vasen ja oikea
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

//Muuta paikkaa

function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}


function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function tenthousandgerms() {
    document.getElementById("quicksort").innerHTML = quickSort([7, 5, 2, 4, 3, 9, 10, 2, 3, 4], 0, 9); //[] taulukon ulkopuolella olevat , 0, 9 ovat paikkanumeroita!
}




var form = document.getElementById('form');
number = document.getElementById('number');
form.onsubmit = function (e) {
    e.preventDefault()
    var variable = number.value;
    //   alert( variable );



    var arr = [];
    for (var i = 1; i <= variable; i++) {
        var x = Math.floor((Math.random() * 100) + 1);
        //console.log(x);
        arr[i] = x;
    }


    console.log(arr);


    //for(var j = 0; j < variable; j++) {
    //  document.getElementById("result").innerHTML = arr[j];
    //}

};