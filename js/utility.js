function getValueOfInput(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getValueOftext(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showDonationAndHistory(){
    document.getElementById(id).classList.add('hidden');
    document.getElementById(id).classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}