function increment() {
    const button = document.getElementById('counter');
    let currentValue = parseInt(button.textContent);
    button.textContent = currentValue + 1;
}

function  decrement(){
    const button=document.getElementById('counter');
    let currentValue=parseInt(button.textContent);
    button.textContent=currentValue-1;
}
function reset()
{
    const button= document.getElementById('counter');
    let currentValue=parseInt(button.textContent);
    button.textContent=0;
}