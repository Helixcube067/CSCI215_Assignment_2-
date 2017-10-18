var x = 0;
function calculate() {
    var numAr = [];
    do {
        addNum = prompt("Add a number")
        if (addNum != -1) {
        numAr.push(parseInt(addNum));
        }
    } while (addNum != -1)
    
    for (var i = 0; i <= numAr.length; i++) {
        x += numAr[i]
        console.log(x)
        x / numAr.length   
    }
    document.getElementById("mean").innerHTML = x
    var revAr = numAr.sort().reverse()
    var norAr = numAr.sort()
    document.getElementById("max").innerHTML = revAr[0]
    document.getElementById("min").innerHTML = norAr[0]
    console.log(numAr)
    console.log(revAr[0])
    console.log(norAr)
    console.log(norAr[0])

}
calculate()
