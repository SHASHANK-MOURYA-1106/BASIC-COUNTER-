const counter = document.getElementById('counter');
const incr=document.querySelector('.incr');
const decr=document.querySelector('.decr');
let count=0;
incr.addEvenListner("click",()=>{
	count++;
	counter.innerHTML= count;
});
decr.addEvenListner("click",()=>{
	count--;
	counter.innerHTML= count;
});