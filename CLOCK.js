
let a;
let date;
let time;

setInterval(() => {
    

a=new Date;
date=a.toLocaleDateString();
time=  a.getHours() +':'+a.getMinutes()+':'+a.getSeconds();
document.getElementById('tm').innerHTML=time+
" DATE IS : "+date;

}

, 1000);

