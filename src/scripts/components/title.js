import PromoService from "../services/promo.service";
import MultiLanguageTexts from "../languages";

export default class Title {
    container
    title
    constructor() {
        this.title = MultiLanguageTexts.getTexts()["Get Unlimited <br>Access"]
        this.container = document.querySelector('[data-js=h1]')

    }

    render() {
        this.container.innerHTML = `<h1 class="title__h1">${this.title}</h1>`
    }
}