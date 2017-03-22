//Bubblesort funktio

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
    return arr;
}

//Painikkeiden onclick funktiot, valmiiksi annetut luvut

function tengerms() {
    document.getElementById("bubble").innerHTML = bubbleSort([7, 5, 2, 4, 3, 9, 10, 2, 3, 4]); //[2, 3, 4, 5, 7, 9]
}

function twentygerms() {
    document.getElementById("bubble").innerHTML = bubbleSort([7, 5, 2, 4, 3, 9, 10, 2, 3, 4, 7, 5, 2, 4, 3, 9, 10, 2, 3, 4]);
}

function hundredgerms() {
    document.getElementById("bubble").innerHTML = bubbleSort([100, 7, 5, 2, 4, 3, 9, 1, 10, 2, 3, 4, 7, 5, 2, 4, 3, 9, 10, 2, 3, 4]);
}

function thousandgerms() {
    document.getElementById("bubble").innerHTML = bubbleSort([7, 5, 2, 4, 3, 9, 10, 2, 3, 4, 7, 5, 2, 4, 3, 9, 10, 2, 3, 47, 5, 2, 4, 3, 9, 10, 2, 3, 4, 7, 5, 2, 4, 3, 9, 10, 2, 3, 47, 5, 2, 4, 3, 9, 10, 2, 3, 4, 7, 5, 2, 4, 3, 9, 10, 2, 3, 47, 5, 2, 4, 3, 9, 10, 2, 3, 4, 7, 5, 2, 4, 3, 9, 10, 2, 3, 4]);
}

/*function tenthousandgerms() {
    document.getElementById("bubble").innerHTML = bubbleSort([7, 5, 2, 4, 3, 9, 10, 2, 3, 4, 7, 5, 2, 4, 3, 9, 10, 2, 3, 4]);
}*/


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