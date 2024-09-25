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


            //add history of donations
           //histoy
        const div = document.createElement('div');
        div.classList.add();
        div.innerHTML = `
                 <h4 class="text-center text-2xl font-bold mb-2"> Aid for Injured in the Quota Movement</h4>
                 <p  class="text-center text-lg font-semibold bg-gray-200">  ${new Date().toLocaleDateString()} : ${addInputMonye} TK Donated. New Balance ${myAvailableMoney} TK. </p>  
                 <div class="divider"></div>
        `
       document.getElementById('history-container').appendChild(div)

        }else{
            alert('You have not sufficent balance')
        }
    }
    })