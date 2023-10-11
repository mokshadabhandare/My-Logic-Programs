//sum of digit of number

let num=parseInt(prompt("Enter number"));

function sumDigit(num)
{    
    let rem, sum=0;
    while(num)
    {
      rem = num%10;
      sum = sum+rem;
      num = Math.floor(num/10);
    }
    document.write(sum);
}

sumDigit(num);