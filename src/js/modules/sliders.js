const sliders = (slides,dir, prev, next) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);
            
    
    function showSlides(n) {
        // условие: если введено число больше фактического
        // количества слайдов на странице = будет 1 слайд показан
        if(n > items.length) {
            slideIndex = 1;
        }
        // если введено меньше, то будет показан последний слайд
        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item =>{
            item.classList.add("animated");
            item.style.display = "none";
        })
        items[slideIndex -1].style.display = 'block';
    }
    showSlides(slideIndex);
    
    // ниже просто функция по перелистыванию
    function plusSlides(n) {
        showSlides(slideIndex +=n);
    }
    // код ниже: создан на случай отсутствия кнопок, чтобы код не сломался
    try {
       const prevBtn = document.querySelector(prev),
             nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', ()=>{
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex -1].classList.add('slideInRight');
        });
        nextBtn.addEventListener('click', ()=>{
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex -1].classList.add('slideInLeft');
        });
    } catch(e){}

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function(){
                plusSlides(1);
                items[slideIndex -1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function(){
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex -1].classList.add('slideInRight');
            }, 3000);
        }
    }
    activateAnimation();
    items[0].parentNode.addEventListener('mouseenter', ()=> {
        clearInterval(paused);
    })
    items[0].parentNode.addEventListener('mouseleave', ()=> {
        activateAnimation();
    })

    
};
export default sliders; 