// logic for actively style cards title
let cards_with_answer = document.querySelectorAll('.answers_cards_card');

for (let item of cards_with_answer) {
    item.addEventListener("mouseover", e => e.target.classList.add('answers_cards_active'));
    item.addEventListener("mouseout", e => e.target.classList.remove('answers_cards_active'));
}

// anchors links

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// button events

const send_an_order = document.querySelectorAll('.order');
const msg = document.querySelector('.message');

msg.addEventListener("click", e => {
    e.preventDefault();
    alert('ваше повідомлення відправлено');
});

for (let item of send_an_order) {
    item.addEventListener("click", e => alert('ваш заказ відправлен'));
}

// burger menu 
const mobile_header = document.querySelector('.header-content-menu-mobile');
const burger_icon = document.querySelector('.header-content-menu-burger');
let burger_toogle = true;

burger_icon.addEventListener("click", e => {
    if (burger_toogle) {
        mobile_header.style.display = "block";
        mobile_header.style.right = "35px";
        burger_toogle = false;
    } else {
        mobile_header.style.display = "none";
        mobile_header.style.right = "-60px";
        burger_toogle = true;
    }
});
