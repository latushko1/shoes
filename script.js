const menu = document.querySelector('.navi');
const btn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click',()=>{
    menu.classList.toggle('active')

})

closeBtn.addEventListener('click',()=>{
    menu.classList.toggle('active')
})
