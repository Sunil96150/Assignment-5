document.getElementById('add-money-in-aid')
.addEventListener('click', function(){
    const addInputMonye = getValueOfInput('input-add-money');
    const haveMoney = getValueOftext('my-money');//ata total tk ja amr kache ache
  
    if(addInputMonye >=0 && addInputMonye !== '' && haveMoney >= addInputMonye){
        const balance = getValueOftext('balance-of-aid');
    
         
        const updateBalance = balance + addInputMonye;
        console.log(updateBalance);
        
        document.getElementById('balance-of-aid').innerText = updateBalance;

        // less the my money
        
        
        const myAvailableMoney = haveMoney - addInputMonye;
        if(myAvailableMoney >= 0){
            console.log(myAvailableMoney) ;
            document.getElementById('my-money').innerText = myAvailableMoney
        }else{
            alert('You have not sufficent balance')
        }
    }
    })