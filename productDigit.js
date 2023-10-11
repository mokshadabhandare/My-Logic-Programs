// sum of product of digit.

let num=parseInt(prompt("Enter number"));

function sumDigit(num)
{    
    let rem,product=1;
    while(num)
    {
      rem=num%10;
      product=product*rem;
      num =Math.floor(num/10);
    }
    document.write(product);
}
sumDigit(num);