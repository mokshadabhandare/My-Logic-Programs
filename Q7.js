let marks=parseInt(prompt("Enter the marks")); // 78 

    if(marks<40 && marks>0)
    {
        document.write("Student Grade is F");
    }else if(marks>=40 && marks<60)
    {
        document.write("Student Grade is E");
    }
    else if(marks>=60 && marks<70)
    {
       document.write("Student Grade is D");
    }
    else if(marks>=70 && marks<80)
    {
        document.write("Student Grade is C");
    }
    else if(marks>=80 && marks<90)
    {
        document.write("Student Grade is B");
    }
    else if(marks>=90 && marks<=100)
    {
        document.write("Student Grade is A");
    }
    else{
        document.write("Invalid Percentage");
    }