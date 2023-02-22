document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
};

const settingSlider = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    mobileFirst: false,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
}

$(document).ready(function (){
    $('.clients__slider').slick(settingSlider);
})