//program to print all natural no from 1 to n in reverse order.


let num=parseInt(prompt("Enter number"));
function natural(num)
{
while(num>=1)
     {
    document.write("Natural numbers"+num,"<br>")  
    num--;   
}
}
natural(num);