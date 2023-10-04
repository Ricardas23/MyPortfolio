// let sections = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('header ul li a')

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY
//         let offset = sec.offsetTop
//         let height = sec.offsetHeight
//         let id = sec.getAttribute('id')

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 document.querySelector('header ul li a [href*=' + id + ']')
//             })
//         }
//     })
// }


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');

}