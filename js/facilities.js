

document.getElementById('donation-btn')
.addEventListener('click', function(){
        document.getElementById('main-container').classList.remove('hidden');
        document.getElementById('history-section').classList.add('hidden');

})


document.getElementById('history-btn')
.addEventListener('click', function(){
    document.getElementById('main-container').classList.add('hidden');
document.getElementById('history-section').classList.remove('hidden');
})



