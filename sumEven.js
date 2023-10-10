//sum of the all even number between 1 to n

let n=parseInt(prompt("Enter number"));

let sum=0;
function sumNo(n){
    if(n%2==0) 
        {
            for(i=0;i<=n;i++)
            {
                sum=sum+i;
            }
            document.write("<br>","Sum of even"+sum);
        }
}
sumNo(n);
