

function count(num)
{
    let cnt=0;
    while(num!=0) // 123 
    {
        cnt++; 
        num=Math.floor(num/10);
        
    }
    return cnt;
}

function first(num)
{
    for(i=0;i<count(num);i++)
    {
        num=Math.round(num/10);
    }
    return num;
}

function last(num)
{
    num=Math.round(num%10);
    return num;
}

let fri = first(123);
let lst = last(123);
console.log("First digit of number is :"+fri);
console.log("Last digit of number is :"+lst);
