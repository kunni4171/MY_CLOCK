
let a;
let date;
let time;

setInterval(() => {
    

a=new Date;
day=a.getDay();
if(day==4)
{
DAY="THRUSDAY";
}
else if(day==1)
{
    DAY="MONDAY";

}
else if(day==2)
{
    DAY="TUEDAY";

}
else if(day==3)
{
    DAY="WEDNESDAY";

}
else if(day==5)
{
    DAY="FRIDAY";

}
else if(day==6)
{
    DAY="SATURDAY";

}
else if(day==7)
{
    DAY="SUNDAY";

}
date=a.toLocaleDateString();
time=  a.getHours() +':'+a.getMinutes()+':'+a.getSeconds();
document.getElementById('tm').innerHTML=time+
"|| DATE IS : "+date + "|| DAY IS : "+DAY;

}

, 1000);

