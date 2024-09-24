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
        

        //histoy
        const div = document.createElement('div');
        div.classList.add();
        div.innerHTML = `
                 <h4 class="text-center text-2xl font-bold"> Donate for Flood Relief in Feni,Bangladesh</h4>
                 <p  class="text-center text-lg font-semibold bg-gray-200"> ${getInputMoney} TK Donated. New Balance ${currentMoney}. </p>
                  
                 <div class="divider"></div>
        `
       document.getElementById('history-container').appendChild(div)


       }

       
    }else{
        alert('You have not sufficent balance')
     }
})