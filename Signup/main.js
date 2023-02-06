const steps = Array.from(document.querySelectorAll('form .step'));
const next = document.querySelectorAll('form .btn-next');
const prev = document.querySelectorAll('form .btn-prev');
const form = document.querySelector('form');
const text = document.querySelectorAll('form .txt');

// console.log(steps);


next.forEach(button =>{
    button.addEventListener('click',(e)=>{
        nextStep('next');
    })
})

prev.forEach(button =>{
    button.addEventListener('click',(e)=>{
        nextStep('prev')
    })
})

document.addEventListener('submit',(e)=>{
if(e.keyCode == 13||e.keyCode==='Enter'){e.preventDefault();return false}

})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputs =[];
    form.querySelectorAll('input').forEach(input=>{
        const{value} = input;
        inputs.push({value})
    })
    console.log(inputs)
    form.reset();
    document.getElementById('error').innerText='';
    let index=0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    // console.log(index);
    steps[index].classList.remove('active');
    steps[0].classList.add('active');
})
function nextStep(btn)
{
    let index=0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    console.log(index);
    steps[index].classList.remove('active');
    
    if(btn==='next')
    {
        index++;
    }else if(btn==='prev')
    {
        index--;
    }
    steps[index].classList.add('active');
    // console.log(active)
    // console.log(active);
}




















