// const shadowHeader = () =>{
//     const header = document.getElementById('header')
//     // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
//     this.scrollY >= 50 ? header.classList.add('shadow-header') 
//                        : header.classList.remove('shadow-header')
// }
// window.addEventListener('scroll', shadowHeader)
const typedHome = new Typed('#home-typed', {
    strings: ['Web Developer', 'Tech Enthusiast', 'Student'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '_',
})