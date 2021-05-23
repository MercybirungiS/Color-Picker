let colorInput=querySelector('#color');
let hexInput =document.querySelector('#hex');

colorInput.addEventListener('input',() =>{
let color= colorInput_value;
hexInput_value=color;
document.body.style.backgroundColor =color;
});