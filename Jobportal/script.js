document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const searchInput = document.querySelector('.search_bar input[type="search"]');
    const categorySelect = document.querySelector('.search_bar select:first-of-type');
    const filterSelect = document.querySelector('.search_bar .filter');
    const jobCards = document.querySelectorAll('.job_card');
    const tagsBar = document.querySelector('.tags_bar');
    const tags = document.querySelectorAll('.tag');
  
    // Functions
    function filterJobs() {
      const searchQuery = searchInput.value.toLowerCase();
      const category = categorySelect.value.toLowerCase();
      const filter = filterSelect.value.toLowerCase();
  
      jobCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const company = card.querySelector('.text span').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.text span')).map(span => span.textContent.toLowerCase());
  
        const matchesSearch = title.includes(searchQuery) || company.includes(searchQuery);
        const matchesCategory = category === 'category' || tags.includes(category);
        const matchesFilter = filter === 'filter' || tags.includes(filter);
  
        if (matchesSearch && matchesCategory && matchesFilter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  
    function removeTag(e) {
      const tag = e.target.closest('.tag');
      if (tag) {
        tag.remove();
        filterJobs();
      }
    }
  
    // Event Listeners
    searchInput.addEventListener('input', filterJobs);
    categorySelect.addEventListener('change', filterJobs);
    filterSelect.addEventListener('change', filterJobs);
    tagsBar.addEventListener('click', removeTag);
  
    // Initial filter on page load
    filterJobs();
  });
  