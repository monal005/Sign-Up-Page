document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();

let fname=document.getElementById('fname').value;
let lname=document.getElementById('lname').value;
let mail=document.getElementById('mail').value;
let pass1=document.getElementById('pass1').value;

let tel=document.getElementById('tel').value;
   
if(fname ==='' || fname===null, lname==''||lname===null,mail ==='' || mail===null, tel==''||tel===null,pass1 ==='' || pass1===null)
{
    
}
else{
    document.getElementById('error').innerHTML="";
}
})