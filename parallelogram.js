//Program to find the area of parallelogram
//A=Base x Height

let b=parseInt(prompt("Enter base"));
let h=parseInt(prompt("Enter height"));

function parallelogram(b,h)
{
area=b*h;
return area;
}

area= parallelogram(b,h);
document.write("Area of parallelogram","<br>"+area);