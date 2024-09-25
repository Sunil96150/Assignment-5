

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


document.getElementById('blog-btn')
.addEventListener('click', function(){
    window.location.href = "blog.html";
})


const buttonOne = document.getElementById('donation-btn');
const buttonTwo = document.getElementById('history-btn');

buttonOne.addEventListener('click', function(){
    buttonTwo.style.backgroundColor = '';
    buttonOne.style.backgroundColor= 'rgba(180, 244, 97, 1)';

})

buttonTwo.addEventListener('click', function(){
    buttonOne.style.backgroundColor = '';
    buttonTwo.style.backgroundColor = 'rgba(180, 244, 97, 1)';

})


