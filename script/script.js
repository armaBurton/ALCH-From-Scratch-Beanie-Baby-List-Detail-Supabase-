import { getRankCard } from "./fetch-utils.js";
import { renderRankCard } from "./render-utils.js";


window.addEventListener(`load`, async() => {

    const rankCard = await getRankCard();
    renderRankCard(rankCard);
    
console.log(rankCard);
});