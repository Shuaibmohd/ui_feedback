const panel = document.getElementById('panel');
const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('.btn')

let selectedRating = 'Unhappy'

ratingsContainer.addEventListener('click', (e) => {

    if (e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
        console.log(selectedRating)
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart fa-6x"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback</p>
        <a href="index.html" style="margin-top: 1em;"><button class="btn">Home</button></a>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}