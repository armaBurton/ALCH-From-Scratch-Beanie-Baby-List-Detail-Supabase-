import { getDetailCard } from './fetch-detail-utils.js';
import { renderDetailCard } from './render-detail-utils.js'

window.addEventListener(`load`, async() => {
    const card = await getDetailCard();
    console.log(card[0]);
    renderDetailCard(card[0]);
});