//enter number and print it in words.

let no=prompt("Enter number");

function number(no)
{
    let num=0;
    while(no != 0)
    {
        num = (num * 10) + (no % 10);
        no =no/10;
    }

    while(num!==0){

switch (num%10)
{
    case 0 :
        document.write("Zero");
        break;  
    case 1 :
        document.write("One");
        break;
    case 2 :
        document.write("Two");
        break;   
    case 3 :
        document.write("Three");
        break;   
    case 4 :
        document.write("Four");
        break;
    case 5 :
        document.write("Five");
        break;  
    case 6 :
        document.write("Six");
        break; 
     case 7 :
        document.write("Seven");
        break; 
    case 8 :
         document.write("Eight");
        break;   
    case 9 :
        document.write("Nine");
        break;  

    default :
        document.write("Invalid Standar you Entered");
}
          num=num/10;
    }
    document.write("<br>");
}
number(no);

