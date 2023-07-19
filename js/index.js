const inputs = document.getElementsByTagName('input');
let pAlert = document.getElementById('pAlert');

inputs[1].addEventListener('click', () => {

    if (inputs[0].innerHTML == false) {

        pAlert.style.display = 'block';
        inputs[0].style.borderColor = 'hsl(354, 100%, 66%)';

    }

})