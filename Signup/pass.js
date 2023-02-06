document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    validateFun();
})
function validateFun(){    

     let pass1=document.getElementById('pass1').value;
    
    if(pass1==null || pass1==""){
      document.getElementById('error4.1').innerHTML=" "+"Cannot be empty";
      document.getElementById('error4.1').style.color="#ffc107"
      // document.getElementById('pass1').addClass('is-invalid')
      

    }
     else{
        console.log("Lastt Name is :"+pass1);
        document.getElementById('error4.1').innerText="";
     }


  let pass2=document.getElementById('pass2').value;
    
    if(pass2==null || pass2==""){
      document.getElementById('error4.2').innerHTML=" "+"Cannot be empty";
      document.getElementById('error4.2').style.color="#ffc107"
      

    }
     else{
        console.log("Lastt Name is :"+pass2);
        document.getElementById('error4.2').innerText="";
     }

     if(pass1 != pass2)
     {
        document.getElementById('passError').innerText="Password Doesn't match"
     }
     else if(pass1 == pass2 && pass1!="" && pass2!="")
     {
      console.log('password matched successfully');
      document.getElementById('passError').innerText="Password Matched Successfully";
      document.getElementById('passError').style.color="#ffc107"
     }

     
     let tel=document.getElementById('tel').value;
     var letters = (/^[A-Za-z]+$/);

    if(tel==null || tel=="" || tel.match(letters)){
      document.getElementById('error5').innerHTML=" "+"Please Enter valid phone number";
      document.getElementById('error5').style.color="#ffc107"

    }
    
    // else if(tel.match(letters))
    // {
    //     document.getElementById('error5').innerText="Only Numbers Allowed";
    //     document.getElementById('error5').style.color="#ffc107"
        
    // }
    
     else{
        console.log("Number is :"+tel);
        document.getElementById('error5').innerText="";
        document.getElementById('passError').innerText="";

     }
     }
