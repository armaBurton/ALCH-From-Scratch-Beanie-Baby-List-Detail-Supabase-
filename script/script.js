import { getRankCard } from "./fetch-utils.js";
import { renderRankCard } from "./render-utils.js";

const main = document.querySelector(`main`);

window.addEventListener(`load`, async() => {
    console.log(main);

    const rankCard = await getRankCard();
    // console.log(rankCard);

    for (let card of rankCard) {
        const cardObj = {
            place: card.place,
            racer: card.racer, 
            country: card.country,
            points: card.points,
            id: card.id
            
        };
        const riderCard = renderRankCard(cardObj);
        
        console.log(riderCard);
        main.append(riderCard); 
    }
    // console.log(rankCard);
});