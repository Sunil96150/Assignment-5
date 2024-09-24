document.getElementById('btn-of-noakhali')
.addEventListener('click', function(){
    const takeInputMoney = getValueOfInput('add-money-in-noakhali');
    const iHaveSomeMoney = getValueOftext('my-money');
    
    if(takeInputMoney >= 0 && takeInputMoney !== '' && iHaveSomeMoney >= takeInputMoney){
        const account = getValueOftext('account-of-noakhali');
        
        const updateAccount = account + takeInputMoney
        console.log(updateAccount);

        document.getElementById('account-of-noakhali').innerText = updateAccount;

        // less the my money

        const instantMoney = iHaveSomeMoney - takeInputMoney
        if(instantMoney >= 0){
            console.log(instantMoney);
            document.getElementById('my-money').innerText = instantMoney;
        }

    }else{
        alert('You have not sufficent balance')
    }
})