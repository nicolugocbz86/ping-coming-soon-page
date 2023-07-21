const inputs = document.getElementsByTagName('input');
let divAlert = document.getElementById('div-alert');
let pAlert = document.getElementById('p-alert');

inputs[1].addEventListener('click', () => {

    if (inputs[0].innerHTML == false) {

        pAlert.style.display = 'block';
        pAlert.style.color = 'hsl(354, 100%, 66%)';
        pAlert.style.fontStyle = 'italic';
        pAlert.style.fontSize = '.8rem';
        inputs[0].style.borderColor = 'hsl(354, 100%, 66%)';

    }

})