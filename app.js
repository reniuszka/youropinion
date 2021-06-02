// nodelist created //
const ratings = document.querySelectorAll('.rating');
const sendBtn = document.getElementById('send');
// parent for btn
const panel = document.getElementById('panel');
// parent for .rating
const ratingsContainer = document.querySelector('.ratings-container');

let selectedRating = 'Happy';
// want to click on the img, so its parent node is rating
ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');

    //     now I want to take the next sibling of img which is small tag and take its html content
    selectedRating = e.target.nextElementSibling.innerText;
    console.log(selectedRating);
  }
});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `<i class="fas fa-heart"></i>
          <strong>Thank You!</strong>
          <br />
          <strong>Feedback: ${selectedRating}</strong>
          `;
});
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    console.log(i);
    ratings[i].classList.remove('active');
  }
}
