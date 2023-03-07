//Credits:
// Technique: https://css-irl.info/css-only-slide-up-caption-hover-effect
// Design: https://dribbble.com/shots/10951466-Social-Mobile-App


console.log('Welcome To My World');
let toggle=document.getElementById('toggle')
toggle.addEventListener('click',()=>{
    let ul=document.getElementById('ul')
    ul.classList.toggle('hidden')
})