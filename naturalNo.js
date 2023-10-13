//1.program to print all natural no from 1 to n.


let num=parseInt(prompt("Enter number"));
let i=1;
function natural(num)
{
while(i<=num)
     {
    document.write("Natural numbers"+i,"<br>")
    i++;     
}
}
natural(num);