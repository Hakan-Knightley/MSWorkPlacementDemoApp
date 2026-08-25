const listings = [
  { title: 'Casio graphing calculator', category: 'Study', type: 'Borrow', location: 'Redland · 2 min ago', image: 'https://images.unsplash.com/photo-1596495578063-1c7c1adf6a8b?auto=format&fit=crop&w=600&q=80' },
  { title: 'MacBook stand', category: 'Tech', type: 'Swap', location: 'Clifton · 18 min ago', image: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=600&q=80' },
  { title: 'Introduction to Psychology', category: 'Study', type: 'Give away', location: 'Stokes Croft · 41 min ago', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80' },
  { title: 'Olympus film camera', category: 'Creative', type: 'Borrow', location: 'Harbourside · 1 hr ago', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80' },
  { title: 'Desk lamp', category: 'Home', type: 'Swap', location: 'Cotham · 2 hrs ago', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80' },
  { title: 'Yoga mat', category: 'Sports', type: 'Give away', location: 'Redland · 3 hrs ago', image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=600&q=80' },
  { title: 'Arduino starter kit', category: 'Tech', type: 'Borrow', location: 'Clifton · 4 hrs ago', image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=600&q=80' },
  { title: 'Rice cooker', category: 'Home', type: 'Swap', location: 'St George · 5 hrs ago', image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80' }
];
const grid = document.querySelector('#listing-grid');
const searchInput = document.querySelector('#search-input');
let activeCategory = 'All';
let saved = new Set();

function renderListings() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = listings.filter(item => (activeCategory === 'All' || item.category === activeCategory) && `${item.title} ${item.category}`.toLowerCase().includes(query));
  grid.innerHTML = filtered.length ? filtered.map((item, index) => `
    <article class="listing-card">
      <div class="listing-image"><img src="${item.image}" alt="${item.title}" loading="lazy" /><button class="save-button ${saved.has(item.title) ? 'saved' : ''}" data-save="${item.title}" aria-label="Save ${item.title}"><i data-lucide="heart"></i></button><span class="item-tag">${item.type}</span></div>
      <div class="item-info"><div class="item-title">${item.title}</div><div class="item-meta"><span>${item.location}</span><strong>${item.category}</strong></div></div>
    </article>`).join('') : '<p class="empty-state">Nothing found here yet. Try another search.</p>';
  lucide.createIcons();
  document.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', () => { const title = button.dataset.save; saved.has(title) ? saved.delete(title) : saved.add(title); renderListings(); showToast(saved.has(title) ? 'Saved to your collection' : 'Removed from saved'); }));
}

document.querySelector('#category-row').addEventListener('click', event => { const category = event.target.closest('[data-category]'); if (!category) return; activeCategory = category.dataset.category; document.querySelectorAll('.category').forEach(item => item.classList.toggle('active', item === category)); renderListings(); });
searchInput.addEventListener('input', renderListings);
document.querySelector('#sort-button').addEventListener('click', event => { event.currentTarget.firstChild.textContent = event.currentTarget.textContent.includes('recent') ? 'Category ' : 'Most recent '; showToast('Listings reordered'); });
const modal = document.querySelector('#listing-modal');
document.querySelector('#open-listing').addEventListener('click', () => { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); modal.querySelector('input').focus(); });
function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
document.querySelector('#close-listing').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.querySelector('#listing-form').addEventListener('submit', event => { event.preventDefault(); closeModal(); event.currentTarget.reset(); showToast('Your item is ready to share'); });
const assistantModal = document.querySelector('#assistant-modal');
const verifyModal = document.querySelector('#verify-modal');
function escapeHtml(value) { return value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]); }
function openFeatureModal(featureModal) { featureModal.classList.add('open'); featureModal.setAttribute('aria-hidden', 'false'); featureModal.querySelector('input').focus(); }
document.querySelector('#open-assistant').addEventListener('click', () => openFeatureModal(assistantModal));
document.querySelector('#open-verify').addEventListener('click', () => openFeatureModal(verifyModal));
document.querySelector('#open-verify-card').addEventListener('click', () => openFeatureModal(verifyModal));
document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => { const featureModal = document.querySelector(`#${button.dataset.closeModal}`); featureModal.classList.remove('open'); featureModal.setAttribute('aria-hidden', 'true'); }));
[assistantModal, verifyModal].forEach(featureModal => featureModal.addEventListener('click', event => { if (event.target === featureModal) { featureModal.classList.remove('open'); featureModal.setAttribute('aria-hidden', 'true'); } }));
document.querySelector('#assistant-form').addEventListener('submit', event => { event.preventDefault(); const course = new FormData(event.currentTarget).get('course').trim(); const lowerCourse = course.toLowerCase(); const tailored = lowerCourse.includes('architecture') ? ['A3 drawing board', 'Scale ruler + cutting mat', 'Portable monitor'] : lowerCourse.includes('nursing') ? ['Stethoscope', 'Anatomy flashcards', 'Comfortable clinical shoes'] : lowerCourse.includes('computer') || lowerCourse.includes('coding') ? ['Laptop stand', 'USB-C hub', 'Arduino starter kit'] : ['Graphing calculator', 'Laptop stand', 'Desk lamp']; document.querySelector('#recommendation').innerHTML = `<strong>Your ${escapeHtml(course)} starter kit</strong><p>We found a few practical picks to get you moving:</p><div class="kit-list">${tailored.map((item, index) => `<span><b>0${index + 1}</b>${item}</span>`).join('')}</div><button type="button" class="recommendation-link" id="see-kit">See matching listings <i data-lucide="arrow-right"></i></button>`; document.querySelector('#recommendation').classList.add('show'); lucide.createIcons(); document.querySelector('#see-kit').addEventListener('click', () => { assistantModal.classList.remove('open'); assistantModal.setAttribute('aria-hidden', 'true'); searchInput.value = tailored[0]; renderListings(); document.querySelector('#listing-grid').scrollIntoView({ behavior: 'smooth', block: 'start' }); }); });
document.querySelector('#verify-form').addEventListener('submit', event => { event.preventDefault(); const email = new FormData(event.currentTarget).get('email'); const domain = email.split('@')[1] || ''; if (!domain.endsWith('.ac.uk')) { showToast('Try your university email address'); return; } verifyModal.querySelector('form').innerHTML = '<div class="success-state"><i data-lucide="badge-check"></i><strong>You’re verified</strong><span>Your student tick is ready for the exchange.</span></div>'; lucide.createIcons(); showToast('Student status verified'); });
function showToast(message) { const toast = document.querySelector('#toast'); toast.querySelector('span').textContent = message; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 2400); }
document.addEventListener('keydown', event => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchInput.focus(); } if (event.key === 'Escape') closeModal(); });
renderListings();
lucide.createIcons();
