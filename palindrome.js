//check whether number is palinndrome or not.


let no = parseInt(prompt("Enter the Number"));

function CountDigit(iNo)
{
    let digit = 0;
    while(iNo!=0)
    {
        digit++;
        iNo = Math.round(iNo/10);
    }
    return digit;
}

function CheckPalindrome(iNo)
{
    let temp = 0;
    let iNoDup = iNo;
    let cnt = CountDigit(iNoDup); 
    for(let i = 1; i<cnt+1;i++)
    {           
        temp = temp * 10 + Math.round(iNo%10);   
        iNo = iNo / 10;  
    }
    if(temp==iNoDup)
    {
        document.write("Palindrome");
    }
}
CheckPalindrome(iNo);