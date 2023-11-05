import {getPromoTemplate} from "./promo.template";
import PromoService from "../../services/promo.service";

export class Promo{
    container
    promosData
    constructor() {
        this.promosData = PromoService.getPromosData()
        this.container = document.querySelector('[data-js=promo-data]')

    }

    render() {
        if(!this.promosData.length) return
        this.container.innerHTML = this.promosData.map(promo => getPromoTemplate(promo)).join('');
    }
}

