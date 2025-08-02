
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

businessCard.forEach((card, index) => {
  card.addEventListener('click', () => {
    const businessId = businesses[index].id;
    localStorage.setItem("selectedBusinessId", businessId);
    window.location.href = "business-detail.html";
  });
});


//Search bar filtering implementation
const searchInput = document.querySelector('.input');
const searchButton = document.querySelector('.search-button');

function renderBusinesses(filteredBusinesses) {
  let businessHTML = '';

  filteredBusinesses.forEach((business) => {
    businessHTML += `
      <div class="business-card js-business-detail">
        <img src="${business.image.logo}" alt="${business.name} Logo" class="card-img">
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

  // Reattach click listeners
  document.querySelectorAll('.js-business-detail').forEach((card, index) => {
    card.addEventListener('click', () => {
      const selectedBusiness = filteredBusinesses[index];
      localStorage.setItem("selectedBusinessId", selectedBusiness.id);
      window.location.href = "business-detail.html";
    });
  });
}

// Initial render
renderBusinesses(businesses);

// Filter and render on search
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = businesses.filter(business =>
    business.name.toLowerCase().includes(query) ||
    business.category.toLowerCase().includes(query) ||
    business.description.brief.toLowerCase().includes(query)
  );

  renderBusinesses(filtered);
}

searchButton.addEventListener('click', handleSearch);

// Optional: also search on Enter key press
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});
