async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Не удалось получить данные с сервера')
        }
        const data = await response.json();
        const productCard = document.querySelector('.products__cards');

        data.forEach(({ image, name, description, price }) => {
            const product = `
                            <div class="product__card">
                        <a href="#" class="card-img__link"><img src="${image}" alt=""></a>
                        <div class="card__cont">
                            <p class="card__title">${name}</p>
                            <p class="card__subtitle">${description}</p>
                            <p class="card__price">$${price}</p>
                        </div>
        `
            productCard.insertAdjacentHTML('beforeend', product)
        });
    } catch (error) {
        console.error(error);
    }
}
fetchData();