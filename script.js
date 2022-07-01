// let num1 = document.querySelector('#input1')
// let num2 = document.querySelector('#input2')

// let numero1 = parseInt(num1.innerText);
// let numero2 = parseInt(num2.innerText);

// let operacao = document.querySelector('.button:nth-of-typeof(1)')
// addButton.addEventListener('click', function(){
//         let adicao = numero1 + numero2
    
// })


// // function calculo (event){
    
    
// //     if (operacao === '-'){
// //         let subtracao = numero1 - numero2
// //     }
    
// //     if (operacao === '/'){
// //         let divisao = numero1 / numero2
// //     }
    
// //     if (operacao === '*'){
// //         let multiplicacao = numero1 * numero2
// //     }
// // }

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let addButton = document.querySelector(".button:nth-of-type(1)");
let subButton = document.querySelector(".button:nth-of-type(2)");
let divButton = document.querySelector(".button:nth-of-type(3)");
let multButton = document.querySelector(".button:nth-of-type(4)");
let divResult = document.querySelector(".result");
let pResult = document.querySelector("#pResult");
let buttons = document.querySelectorAll('.button');

addButton.addEventListener('click', function () {
  const result = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = result;

});

subButton.addEventListener('click', function () {
  const result = parseInt(input1.value) - parseInt(input2.value);
  pResult.innerText = result;

});

divButton.addEventListener('click', function () {
  const result = parseInt(input1.value) / parseInt(input2.value);
  pResult.innerText = result;

});

multButton.addEventListener('click', function () {
  const result = parseInt(input1.value) * parseInt(input2.value);
  pResult.innerText = result;

});
