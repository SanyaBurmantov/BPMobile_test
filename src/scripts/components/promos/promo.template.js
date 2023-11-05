export function getPromoTemplate(promo) {
    return `
        <a href="https://apple.com/"class="promo-item">
            <img class="promo-item__picture" src="${promo.image}" alt="${promo.text}">
            <p class="promo-item__text">${promo.text}</p>
        </a>
    `
}