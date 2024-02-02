const btn = document.querySelector('.share');
const popup = document.querySelector('.social-media');
console.log(btn);
btn.addEventListener('click',function(button){
    if(button.target.id === '1'){
        popup.style.display = 'block';
        popup.style.display = 'flex';
    }
});