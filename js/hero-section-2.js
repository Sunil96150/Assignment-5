document.getElementById('btn-of-feni')
.addEventListener('click', function(){
     const getInputMoney = getValueOfInput('add-money-in-feni');
     const myMoneyIs = getValueOftext('my-money');
     
     
     if(getInputMoney >= 0 && getInputMoney !== '' && myMoneyIs >= getInputMoney){
       const amount = getValueOftext('amount-of-feni')
       
       const updateAmount = amount + getInputMoney
       console.log(updateAmount)
       document.getElementById('amount-of-feni').innerText = updateAmount;

       // less the my money

       const currentMoney = myMoneyIs - getInputMoney
       if(currentMoney >= 0){
        console.log(currentMoney)
        document.getElementById('my-money').innerText = currentMoney;
       }
    }else{
        alert('You have not sufficent balance')
     }
})