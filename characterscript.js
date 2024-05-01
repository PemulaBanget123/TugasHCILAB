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