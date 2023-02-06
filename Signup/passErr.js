// function passErr1()
// {
//     document.getElementById('error').innerText='';
// }
// function passErr2()
// {
//     document.getElementById('error2').innerText='';
// }
// function passErr3()
// {
//     document.getElementById('error3').innerText='';
// }function passErr4()
// {
//     document.getElementById('error4.1').innerText='';
// }
// function passErr5()
// {
//     document.getElementById('error4.2').innerText='';
// }
// function passErr6()
// {
//     document.getElementById('error5').innerText='';
// }

let fname=document.getElementById('fname').value;
let lname=document.getElementById('lname').value;
let mail=document.getElementById('mail').value;
let pass1=document.getElementById('pass1').value;
let pass2=document.getElementById('pass2').value;
let tel=document.getElementById('tel').value;



if(fname=='')
{
    document.getElementById('error').innerText="Error Message"

}
else{document.getElementById('error').innerText=''}