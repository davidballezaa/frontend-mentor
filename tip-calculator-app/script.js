// inputs
const bill_input = document.getElementById('bill-input');

const buttons = document.querySelectorAll('.tip-button');
const tipInput = document.getElementById('input__tip-custom');

const number_people_input = document.getElementById('number-people-input');

const number_people_error_message = document.querySelector('.number-people-error-message');

// results
const tip_result = document.getElementById('tip-result');
const total_result = document.getElementById('total-result');

// variables

var tip_value;

//code

function buttonRemoveClicked(){
    for(let j=0; j<buttons.length; j++){
        buttons[j].classList.remove('button--selected');
    }
}
function buttonAddClicked(){
    buttonRemoveClicked();
    tipInput.classList.remove('input__tip-input--clicked');
    this.classList.toggle('button--selected');
    var string_tip_value = this.innerText;
    tip_value = Number(string_tip_value.split('').filter(item=>item!='%').join(''));
    getTotal();
}

function inputClicked(){
    buttonRemoveClicked();
    this.classList.toggle('input__tip-input--clicked');
    var string_tip_value = this.value;
    if(string_tip_value!=''){
        tip_value = Number(string_tip_value);
        getTotal();
    }
}


function checkInvalid(){
    if(parseInt(number_people_input.value)==0){
        number_people_input.classList.toggle('number-people-input--error');
        number_people_error_message.classList.toggle('number-people-error-message--on');
        number_people_error_message.classList.remove('no-display');
        tip_result.innerHTML = '$0.00';
        total_result.innerText = '$0.00';
    } else {
        number_people_input.classList.remove('number-people-input--error');
        number_people_error_message.classList.remove('number-people-error-message--on');
        getTotal();
    }
}

function getTotal(){
    if(bill_input.value!='' && tip_value!=undefined){
        var number_people;
        if(number_people_input.value=='' || number_people_input.value=='0'){
            number_people = 1;
        } else {
            number_people = parseInt(number_people_input.value);
        }

        var tip_per_person = ((tip_value * (parseFloat(bill_input.value)) / 100) / number_people).toFixed(2);
        tip_result.innerText = '$' + tip_per_person; 

        var total_per_person = ((+((parseFloat(bill_input.value) / number_people).toFixed(2))) + (+tip_per_person)).toFixed(2);
        total_result.innerText = '$' + total_per_person;
    }
}

function reset(){
    bill_input.value = '';
    number_people_input.value = '';
    tip_result.innerText = '$0.00';
    total_result.innerText = '$0.00';
    checkInvalid();
    buttonRemoveClicked();
}

bill_input.addEventListener('click', getTotal);
bill_input.addEventListener('keyup', getTotal);

buttons[0].addEventListener('click', buttonAddClicked);
buttons[1].addEventListener('click', buttonAddClicked);
buttons[2].addEventListener('click', buttonAddClicked);
buttons[3].addEventListener('click', buttonAddClicked);
buttons[4].addEventListener('click', buttonAddClicked);

tipInput.addEventListener('keyup', inputClicked);
tipInput.addEventListener('change', inputClicked);
tipInput.addEventListener('click', inputClicked);

number_people_input.addEventListener('click', checkInvalid);
number_people_input.addEventListener('keyup', checkInvalid);


