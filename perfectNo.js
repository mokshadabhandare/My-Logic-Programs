//check number is perfect or not.


let n=parseInt(prompt("Enter number"));

function Perfect() {
    
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (n % i == 0) {
            sum = sum + i;
        }
    }
    if (sum==n)
    {
        document.write("The number is perfect ");
    }
    else
    {
        document.write("The number is not perfect");
}
}
Perfect();