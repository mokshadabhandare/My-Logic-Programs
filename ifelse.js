let marks=parseInt(prompt("Enter the marks")); // 78 

    if(marks<35 && marks>0)
    {
        document.write("Student is Failed");
    }else if(marks>=35 && marks<50)
    {
        document.write("Student is in Third class");
    }
    else if(marks>=50 && marks<75)
    {
       document.write("Student is in Second Class");
    }
    
    else if(marks>=75 && marks<=100)
    {
        document.write("Student is in First CLass");
    }
    else{
        document.write("Invalid Percentage");
    }