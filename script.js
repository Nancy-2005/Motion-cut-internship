const selectElement = document.getElementById('category');
const searchInput = document.getElementById('search-input');

selectElement.addEventListener('change', (event) => {
  const selectedCategory = event.target.value;
  const formattedCategory = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace('-', ' ');
  searchInput.placeholder = `Search in ${formattedCategory}`; // Update placeholder
});
