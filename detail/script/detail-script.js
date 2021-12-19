import { getDetailCard } from './fetch-detail-utils.js';
import { renderDetailCard } from './render-detail-utils.js';

const main = document.querySelector(`main`);

window.addEventListener(`load`, async() => {
    const url = new URL(location.href);
    const search = url.searchParams;
    const id = parseInt(search.get(`id`));
    const card = await getDetailCard(id);
    const returnClicker = renderDetailCard(card);
    
    main.append(returnClicker);
});