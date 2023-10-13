// enter number and print it reverse

let num=parseInt(prompt("Enter number"));

function reverse(num)
{
    let rem,rev=0;
    while(num!=0)
    { 
        rem=num%10;
        rev=(rev*10)+rem;
        num=Math.floor(num/10);
    }
    document.write("Reversed number"+rev);
}
reverse(num);