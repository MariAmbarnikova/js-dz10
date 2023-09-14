import { info } from "./data.js";

const data = JSON.parse(info);
console.log(data);
const content = document.querySelector('.content');
content.style.display = 'flex';
content.style.flexWrap = 'wrap';
content.style.alignItems = 'center';
content.style.justifyContent = 'center';
content.style.alignItems = 'stretch';
content.style.width = 1420;
content.style.margin = '0 auto';


data.forEach(({ image, name, like, price }) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.display = 'inline-block';
    div.style.width = 300;
    div.style.backgroundColor = 'white';
    div.style.border = 'none';
    div.style.borderRadius = 20;
    div.style.margin = '10px';

    content.appendChild(div);


    const img = document.createElement('img');
    div.classList.add('card-img');
    img.src = image;
    img.widht = 300;

    div.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.style.padding = '30px';
    cardContent.style.textAlign = 'center';
    cardContent.style.fontSize = '23px';
    cardContent.style.textWrapp = 'wrapp'

    div.appendChild(cardContent);

    const title = document.createElement('h4');
    title.classList.add('card-title');
    title.textContent = name;
    cardContent.appendChild(title);


    const cardSubtitle = document.createElement('div');
    cardSubtitle.classList.add('card-subtitle');
    cardSubtitle.style.display = 'flex';
    cardSubtitle.style.justifyContent = 'space-around';
    cardContent.appendChild(cardSubtitle);

    const subtitleLike = document.createElement('p');
    subtitleLike.classList.add('subtitle-like');
    subtitleLike.textContent = like;
    cardSubtitle.appendChild(subtitleLike);

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-price');
    cardPrice.textContent = price;
    cardSubtitle.appendChild(cardPrice);
});