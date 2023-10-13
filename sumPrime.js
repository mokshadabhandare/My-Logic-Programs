//sum of the prime number.


let n=parseInt(prompt("Enter number"));

let sum=0;
function sumPrime(n){
    
    for(let i=2; i<=n; i++)
    {
      if(n%i!==0)
      {
           sum=sum+i;
      }
    document.write("Sum of prime"+sum,"<br>");
    }
}
sumPrime(n);
