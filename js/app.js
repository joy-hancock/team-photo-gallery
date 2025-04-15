const memberSearch = document.getElementById('memberSearch');

memberSearch.addEventListener('keyup', (e) => {
	let currentValue = e.target.value.toLowerCase();
	let cards = document.querySelectorAll('div.card-content');
	cards.forEach((card) => {
		if (card.textContent.toLowerCase().includes(currentValue)) {
			card.parentNode.style.display = 'block';
		} else {
			card.parentNode.style.display = 'none';
		}
	});
});
