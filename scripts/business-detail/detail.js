import { businesses } from "../main/data/businesses.js";

const selectedBusinessId = localStorage.getItem("selectedBusinessId");
const selectedBusiness = businesses.find(biz => biz.id === selectedBusinessId);

let businessDetailHTML = '';

if (selectedBusiness) {
  const { name, description, image, contact, hours, comments } = selectedBusiness;

  const commentHTML = Object.entries(comments || {}).map(([user, { rating, text }]) => `
    <div class="comment">
      <div class="comment-header">
        <div class="comment-profile-container">
          <img class="comment-profile" src="images/comment-profile.png" alt="${user} profile">
        </div>
        ${user} <span class="comment-stars">${rating}</span>
      </div>
      <div class="comment-text">${text}</div>
    </div>
  `).join('');

  businessDetailHTML = `
    <div class="image-flex">
      <div class="business-image-flex">
        ${image.moreImages.map((img, i) => `
          <div class="business-logo-container">
            <img class="business-logo" src="${img}" alt="${name} image ${i + 1}">
            <div class="business-rating">⭐ ${Object.values(image.rating)[i]}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <section class="business-profile">
      <div class="main">
        <div class="-business-description">${description.detail || description.brief}</div>

        <div class="hour-contact-container">
          <div class="business-hours">
            <div>Available hours</div>
            ${Object.entries(hours).map(([day, time]) => `
              <div class="week">${day} ${time}</div>
            `).join('')}
          </div>

          <div class="contact-box">
            <div class="contact-information">Contact information
              <div class="contact">${contact.phone}</div>
              <div class="contact">${contact.email}</div>
              <div class="address">${contact.address}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="comments-section">
      <h2>Comments</h2>
      <div class="comment js-comment"></div>
      ${commentHTML}
    </div>
  `;
} else {
  businessDetailHTML = `<p>Business not found. Please go back and select one again.</p>`;
}

document.querySelector('.js-business-image').innerHTML = businessDetailHTML;
