let cards_with_answer = document.querySelectorAll('.answers_cards_card');

for (let item of cards_with_answer) {
    item.addEventListener("mouseover", e => e.target.classList.add('answers_cards_active'));
    item.addEventListener("mouseout", e => e.target.classList.remove('answers_cards_active'));
}