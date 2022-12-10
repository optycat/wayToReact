function slider({container, slide,
                 nextArrow, prewArrow,
                 countContainer,
                 slidesContainer}) {
    
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prewArrow),
        countersContainer = document.querySelector(countContainer),
        totalSlides = countersContainer.querySelector('#total'),
        current = countersContainer.querySelector('#current'),
        slidesWrapper = document.querySelector(slidesContainer),
        slidesField = slidesWrapper.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0;

    const placeZero = (a) => a > 10 ? a : `0${a}`;
    const laeveJustNumbers = (b, multiplier = -1) => multiplier <= -1 ? +b.replace(/\D/g, '') : +b.replace(/\D/g, '') * multiplier;

    totalSlides.textContent = placeZero(slides.length);
    current.textContent = placeZero(slideIndex);

    slidesField.style.cssText = `width: ${100 * slides.length}%;
                       display: flex;
                       transition: 0.5s all;`;
    slidesWrapper.style.overflow = 'hidden';
    slider.style.position = 'relative';

    const paginationDots = document.createElement('ol'),
        dots = [];


    paginationDots.classList.add('carousel-indicators');
    paginationDots.style.cssText = `
position: absolute;
right: 0;
bottom: 0;
left: 0;
z-index: 15;
display: flex;
justify-content: center;
margin-right: 15%;
margin-left: 15%;
list-style: none;
`;

    slider.append(paginationDots);

    slides.forEach((slide, i) => {
        slide.style.width = width;
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.style.cssText = `
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 6px;
  margin-right: 3px;
  margin-left: 3px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity .6s ease;
`;
        dot.setAttribute('data-slide-to', i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        paginationDots.append(dot);
        dots.push(dot);
    });

    const repaintSlide = (r = laeveJustNumbers(width, slideIndex - 1)) => {
        slidesField.style.transform = `translateX(-${r}px)`;
        dots.forEach(dot => dot.style.opacity = 0.5);
        dots[slideIndex - 1].style.opacity = 1;
        current.textContent = placeZero(slideIndex);
    };

    next.addEventListener('click', () => {
        if (offset == laeveJustNumbers(width, slides.length - 1)) {
            offset = 0;
            slideIndex = 1;
        } else {
            offset += laeveJustNumbers(width);
            slideIndex += 1;
        }

        repaintSlide(offset);
    });

    prev.addEventListener('click', () => {
        if (!offset) {
            offset = laeveJustNumbers(width, slides.length - 1);
            slideIndex = slides.length;
        } else {
            offset -= laeveJustNumbers(width);
            slideIndex -= 1;
        }

        repaintSlide(offset);
    });

    paginationDots.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {

            slideIndex = e.target.getAttribute('data-slide-to');

            repaintSlide();
        }
    });
 
}
export default slider;