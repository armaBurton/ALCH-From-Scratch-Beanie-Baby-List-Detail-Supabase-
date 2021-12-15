// p.place #
// h2.racer
// p.country
// span.points

export function renderRankCard(rankCard){
    for (let card of rankCard){
        const cardObj = {
            place: card.place,
            racer: card.racer, 
            country: card.country,
            points: card.points,
            id: card.id
        };

        //riderCard holds .place, .rankings, .logo
        const riderCard = document.createElement(`section`);
        riderCard.classList.add(`rider-card`);
        
        const place = document.createElement(`p`);
        place.classList.add(`place`);
        place.textContent = cardObj.place;

        //rankings holds .racer and .lower
        const rankings = document.createElement(`div`);
        rankings.classList.add(`rankings`);
        
        const racer = document.createElement(`h2`);
        racer.classList.add(`racer`);
        racer.textContent = cardObj.racer;
        
        //lower holds .country and .p-points
        const lower = document.createElement(`div`);
        lower.classList.add(`lower`);
        
        const country = document.createElement(`p`);
        country.classList.add(`country`);
        country.textContent = cardObj.country;
        
        //pPoints holds .points
        const pPoints = document.createElement(`p`);
        pPoints.classList.add(`p-points`);
        const points = document.createElement(`span`);
        points.classList.add(`points`);
        pPoints.textContent = `${cardObj.points} pts`;

        lower.append(country, pPoints);
        rankings.append(racer, lower);
        
        const logo = document.createElement(`img`);
        logo.classList.add(`logo`);
        logo.src = './assets/riders/motogp.webp';

        const id = cardObj.id;

        riderCard.addEventListener(`click`, () => {
            window.location.href = `./detail/index.html?id=${id}`;
        });
        
        riderCard.append(place, rankings, logo);
        const main = document.querySelector(`main`);
        main.append(riderCard);  
        
        

    }
    
}