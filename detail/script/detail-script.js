import { getDetailCard } from './fetch-detail-utils.js';

window.addEventListener(`load`, async() => {
    alert(`hi`);
    const card = await getDetailCard();
    console.log(card);
});