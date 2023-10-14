//Count number of digit in number


// let iNo=parseInt(prompt("Enter number"));

function CountDigit(iNo)
{
    let i=0;
    while(iNo!=0)
    {
        i++;
        iNo=Math.round(iNo/10);
    }
    console.log("Numbers in digit is"+i);
}
CountDigit(123)