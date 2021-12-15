export function renderDetailCard(data){
    const url = new URL(location.href);
    const search = url.searchParams;
    const id = parseInt(search.get(`id`));

    let position = 0;
    let index = 0;
    for (let d of data){
        const x = d.id;
        if (x === id){
            index = position;
        }
        position++;
    }

    let detailObj = {
        riderNumber: data[index].riderNumber,
        riderImg: data[index].riderImg,
        name: data[index].name,
        racerNumber: data[index].racerNumber,
        sponsoredTeam: data[index].sponsoredTeam,
        polePosition: data[index].polePosition,
        ptCount: data[index].ptCount,
        biography: data[index].biography
    };

    //holds .top-left and .top-right
    const detailSectionTop = document.createElement(`section`);
    detailSectionTop.classList.add(`detail-section-top`);
    
    const riderNumber = document.createElement(`p`);
    riderNumber.classList.add(`rider-number`);
    riderNumber.textContent = detailObj.riderNumber;
    
    //holds .ride-img
    const riderImage = document.createElement(`div`);
    riderImage.classList.add(`rider-image`);
    
    const riderImg = document.createElement(`img`);
    riderImg.classList.add(`rider-img`);
    riderImg.src = `.${detailObj.riderImg}`;
    
    riderImage.append(riderImg);
    
    //holds .name-tag and .flex-row-space-between
    const topRight = document.createElement(`div`);
    topRight.classList.add(`top-right`);

    //holds .flex-row, .sponsored-team
    const nameTag = document.createElement(`div`);
    nameTag.classList.add(`name-tag`);

    //holds .racer-name, .racer-number
    const flexRow = document.createElement(`div`);
    flexRow.classList.add(`flex-row`);

    const name = document.createElement(`p`);
    name.classList.add(`racer-name`);
    name.textContent = detailObj.name;

    const racerNumber = document.createElement(`p`);
    racerNumber.classList.add(`racer-number`);
    racerNumber.textContent = detailObj.racerNumber;

    flexRow.append(name, racerNumber);

    const sponsoredTeam = document.createElement(`p`);
    sponsoredTeam.classList.add(`sponsored-team`);
    sponsoredTeam.textContent = detailObj.sponsoredTeam;

    nameTag.append(flexRow, sponsoredTeam);

    //holds .rank.pole-position and .points.pt-count
    const flexRowSpaceBetween = document.createElement(`div`);
    flexRowSpaceBetween.classList.add(`flex-row-space-between`);

    const rank = document.createElement(`p`);
    rank.classList.add(`rank`);
    const polePosition = document.createElement(`span`);
    polePosition.classList.add(`pole-position`);
    polePosition.textContent = detailObj.polePosition;
    rank.textContent = `Rank `;
    rank.append(polePosition);

    const points = document.createElement(`p`);
    points.classList.add(`points`);
    const ptCount = document.createElement(`span`);
    ptCount.classList.add(`pt-count`);
    ptCount.textContent = detailObj.ptCount;
    points.textContent = ` pts`;
    points.append(ptCount);

    flexRowSpaceBetween.append(rank, points);

    topRight.append(nameTag, flexRowSpaceBetween);

    const detailSectionBottom = document.createElement(`section`);
    detailSectionBottom.classList.add(`detail-section-bottom`);

    const biography = document.createElement(`p`);
    biography.classList.add(`biography`);
    biography.textContent = detailObj.biography;

    detailSectionBottom.append(biography);

    const clickBack = document.querySelector(`.clicks-back`);

    clickBack.addEventListener(`click`, () => {
        window.location.href = '../';
    });

    
    //holds .rider-number .rider-image
    const topLeft = document.createElement(`div`);
    topLeft.classList.add(`top-left`);
    detailSectionTop.append(topLeft, topRight);
    
    topLeft.append(riderNumber, riderImage);
    
    const main = document.querySelector(`.clicks-back`);
    main.append(detailSectionTop, detailSectionBottom);

}