// document.getElementById("hunter").addEventListener("click", function() {
//     var hunterContent = document.getElementById("hunter-content");
//     var hunterDisplay = hunterContent.style.display;
//     if (hunterDisplay == 'block') {
//         hunterContent.style.display = 'none';
//     } else {
//         hunterContent.style.display = 'block';
//     }
// });

// document.getElementById("guardian").addEventListener("click", function() {
//     var guardianContent = document.getElementById("guardian-content");
//     var guardianDisplay = guardianContent.style.display;
//     if (guardianDisplay == 'block') {
//         guardianContent.style.display = 'none';
//     } else {
//         guardianContent.style.display = 'block';
//     }
// });

// let items = document.querySelectorAll('.wholebox .list .container');
// let icons = document.querySelectorAll('.dragonclass');
// let itemActive = 0;

// function showSlider(){
//     // remove item active old
//     let itemActiveOld = document.querySelector('.wholebox .list .container.active');
//     let thumbnailActiveOld = document.querySelector('.boxcontainer .box.active');
//     itemActiveOld.classList.remove('active');
//     thumbnailActiveOld.classList.remove('active');

//     // active new item
//     items[itemActive].classList.add('active');
//     icons[itemActive].classList.add('active');
// }
// icons.forEach((boxcontainer, index) => {
//     boxcontainer.addEventListener('click', () => {
//         itemActive = index;
//         showSlider();
//     })
// })
let items = document.querySelectorAll('.wholebox .list .container');
let thumbnails = document.querySelectorAll('.boxcontainer .box');
let itemActive = 0;

function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.wholebox .list .container.active');
    let thumbnailActiveOld = document.querySelector('.boxcontainer .box.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}
thumbnails.forEach((boxcontainer, index) => {
    boxcontainer.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})