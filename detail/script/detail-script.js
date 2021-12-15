import { getDetailCard } from './fetch-detail-utils.js';
import { renderDetailCard } from './render-detail-utils.js'

window.addEventListener(`load`, async() => {
    const card = await getDetailCard();
    // const url = new URL(location.href);
    // const search = url.searchParams;
    // card.id = search.get(`id`);
    // console.log(card.id);
    renderDetailCard(card);
});