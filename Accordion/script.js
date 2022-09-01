
let arrows = document.querySelectorAll('svg');

arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        arrow.parentElement.nextElementSibling.classList.toggle('hidden');
        arrow.parentElement.classList.toggle('active');
        arrow.parentElement.parentElement.classList.toggle('active-border');
    });
});
