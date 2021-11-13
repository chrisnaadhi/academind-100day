const dateNow = document.querySelector('#dateNow');

const date = new Date();
const day = date.toLocaleDateString('en-us', { weekday: 'long' });
const tgl = date.getDate();
const month = date.toLocaleDateString('en-us', { month: 'long' })
const year = date.getFullYear();

dateNow.innerHTML = `${day}, ${tgl} ${month} ${year}`;