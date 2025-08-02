
export function renderBusinesses(businesses, container) {
  container.innerHTML = businesses.map(biz => `
    <div class="business-card" data-id="${biz.id}">
      <img src="../${biz.image.logo}" alt="${biz.name} Logo" class="card-img">
      <div class="business-info">
        <div class="business-name-rating">
          <h3>${biz.name}</h3>
          <span class="rating">⭐ ${biz.rating}</span>
        </div>
        <p>${biz.description.brief}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.business-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      localStorage.setItem('selectedBusinessId', id);
      window.location.href = '../business-detail.html';
    });
  });
}
