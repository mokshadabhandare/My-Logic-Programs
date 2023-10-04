let year=parseInt(prompt("Enter year"));

if(year%4==0 || year%400==0)
{
    document.write("Year is Leap Year");
}
else{
    document.write("Year is not leap year");
}