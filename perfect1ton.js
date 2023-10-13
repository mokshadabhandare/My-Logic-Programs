//print perfect number upto 1 to n.


let n=parseInt(prompt("Enter number"));
let i=1;
function Perfect() {
    
    var sum = 0;
    while(i<=n) {
        if (n % i == 0) {
            sum = sum + i;
        }
    }
    if (sum==n)
    {
        document.write("The number is perfect"+sum);
    }
    i++;
}
Perfect();