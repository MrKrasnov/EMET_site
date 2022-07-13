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