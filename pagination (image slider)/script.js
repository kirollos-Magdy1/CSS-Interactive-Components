let sliderImages = Array.from(document.querySelectorAll('.slider-container img')),
    slidesCount = sliderImages.length,
    currentSlide = 1, prevSlide = 1,
    sliderBullets = [],
    next = document.getElementById('next'),
    prev = document.getElementById('prev')
    ;

let slideNumber = document.getElementById('slider-number');
let sliderBulletsElements;

let creating_slider_bullets = () => {
    let bullets = [];
    let paginationElement = document.createElement('ul');
    for (let i = 0; i < slidesCount; i++) {
        let paginationItem = document.createElement('li');
        // paginationItem.setAttribute('data-index', i + 1);
        paginationItem.setAttribute('class', 'bullet');
        paginationItem.appendChild(document.createTextNode(i + 1));
        // paginationItem.textContent = i + 1;

        paginationElement.appendChild(paginationItem);
        bullets.push(paginationItem);

    }
    document.getElementById('indicators').appendChild(paginationElement);
    return bullets;
}

// determine current slide, adding and removing active class,  
let slide_update = () => {
    slideNumber.textContent = 'Slide Number # ' + currentSlide;
    sliderBullets[currentSlide - 1].classList.add('active-bullet');
    sliderImages[currentSlide - 1].classList.remove('hidden');

    sliderImages[prevSlide - 1].classList.add('hidden');
    sliderBullets[prevSlide - 1].classList.remove('active-bullet');

    if (currentSlide === 1) {
        prev.classList.add('disabled');
    }
    else {
        prev.classList.remove('disabled');
    }
    if (currentSlide === slidesCount) {
        next.classList.add('disabled');
    }
    else {
        next.classList.remove('disabled');
    }
}

let next_button = () => {
    next.addEventListener('click', () => {
        if (next.classList.contains('disabled')) {
            return false;
        }
        prevSlide = currentSlide++;
        slide_update();
    });
}

let prev_button = () => {
    prev.addEventListener('click', () => {
        if (prev.classList.contains('disabled')) {
            return false;
        }
        else {
            prevSlide = currentSlide--;
            slide_update();
        }

    });
}

let bullet_buttons = () => {
    sliderBulletsElements.forEach((sliderBulletsElement, idx) => {
        sliderBulletsElement.addEventListener('click', () => {
            if (currentSlide === idx + 1)
                return false;
            prevSlide = currentSlide;
            currentSlide = idx + 1;
            slide_update();
        })
    });
}

(() => {
    sliderImages[0].classList.remove('hidden');
    slideNumber.textContent = 'Slide Number # ' + 1;

    prev.classList.add('disabled');
    if (slidesCount === 1) {
        next.classList.add('disabled');
    }

    sliderBullets = creating_slider_bullets();
    sliderBullets[0].classList.add('active-bullet');
    sliderBulletsElements = document.querySelectorAll('.bullet');
    next_button();
    prev_button();
    bullet_buttons();
})()

console.log(sliderBulletsElements);