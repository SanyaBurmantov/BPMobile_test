export function getPlansTemplate(btnText) {

    if(btnText.description){
        return `
        <a href="https://apple.com/" class="btn btn-promo mb-8">
        <div class="btn-promo__stopper">${btnText.stopper}</div>
            <div class="width-65">
                <div class="btn-promo__title">${btnText.text}</div>
                <div class="btn-promo__description">${btnText.description}</div>
            </div>
            <div class="btn-promo__price">
                <div>${btnText.price}</div>
            </div>
        </a>
    `
    } else {
        return `
        <a href="https://google.com/" class="btn btn-promo btn-promo--weakly mb-8">
            <div class="width-65">
                <div class="btn-promo__title">${btnText.text}</div>
            </div>
            <div class="btn-promo__price">
                <div>${btnText.price}</div>
            </div>
        </a>
    `
    }
}

export function getConfirmButtonTemplate(textButton) {
    return `
        <a href="#" class="btn btn-white">
            <p>${textButton}</p>
        </a>
    `
}

export function getFooterButtonTemplate(textButton){
    return `
        <a href="#" class="footer__btn">${textButton.text}</a>
    `
}