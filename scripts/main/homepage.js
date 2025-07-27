
import { businesses } from "./data/businesses.js";


let businessHTML = '';

businesses.forEach((business) => {
  businessHTML += `
  <div class="business-card js-business-detail">
    <img src="${business.image.logo}" alt="Computer Greeks Logo" class="card-img">
    <div class="business-info">
      <div class="business-name-rating">
        <h3>${business.name}</h3>
        <span class="rating">⭐ ${business.rating.toFixed(1)}</span>
      </div>
      <p>${business.description.brief}</p>
    </div>
  </div>
`;
});

document.querySelector('.js-business-card-grid').innerHTML = businessHTML;

export const businessCard = document.querySelectorAll('.js-business-detail');

businessCard.forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = "business-detail.html";
  });
});
