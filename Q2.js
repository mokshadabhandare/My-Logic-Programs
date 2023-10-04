/*
let x=10;
let y=20;
let z=30;

if(x>y && x>z)
{
    document.write("X is Maximum");
}
else if(y>x && y>z ){
    document.write("Y is Maximum");
}
else{
    document.write("Z is Maximum");
}
*/

OR

let num1=parseInt(prompt("Enter first number"));
let num2=parseInt(prompt("Enter second number"));
let num3=parseInt(prompt("Enter third number"));

if(num1>num2 && num1>num3){
    document.write("Number 1 is Maximum");
}
else if (num2>num1 && num2>num3){
    document.write("Number 2 is Maximum ");
}
else{
    document.write("Number 3 is Maximum");
}
