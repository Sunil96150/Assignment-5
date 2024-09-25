document.getElementById('btn-of-noakhali')
.addEventListener('click', function(){
    const takeInputMoney = getValueOfInput('add-money-in-noakhali');
    const iHaveSomeMoney = getValueOftext('my-money');

    if(takeInputMoney >= 0 && takeInputMoney !== '' && iHaveSomeMoney >= takeInputMoney){
        const account = getValueOftext('account-of-noakhali');
        const updateAccount = account + takeInputMoney;
        console.log(updateAccount);
        document.getElementById('account-of-noakhali').innerText = updateAccount

        //less my current balance

        const nowMyNewaccount = iHaveSomeMoney - takeInputMoney;
        document.getElementById('my-money').innerText = nowMyNewaccount;


        //adding date and time
       
        //histoy
        const div = document.createElement('div');
        div.classList.add();
        div.innerHTML = `
                 <h4 class="text-center text-2xl font-bold mb-2">Donate for Flood at Noakhali, Bangladesh</h4>
                 <p  class="text-center text-lg font-semibold bg-gray-200">  ${new Date().toLocaleDateString()} : ${takeInputMoney} TK Donated. New Balance ${nowMyNewaccount} TK. </p>   
                 <div class="divider"></div>
        `
       document.getElementById('history-container').appendChild(div)
    }else{
        alert('You have not sufficent balance')
    }
})