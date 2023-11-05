import {Promo} from "./components/promos/promo";
import PromoService from "./services/promo.service";
import Title from "./components/title";
import {Button, FooterButtons, Plans} from "./components/buttons/button";
import {GetClientPhone} from "./multiscreen";

document.addEventListener('DOMContentLoaded', async () => {
    let promo = new Promo()
    promo.render()

    let title = new Title()
    title.render()

    let plans = new Plans()
    plans.render()

    let buttonConfirm = new Button()
    buttonConfirm.render()

    let footerBtn = new FooterButtons()
    footerBtn.render()

    changePaddings()
})

function changePaddings(){
    const sizeScreen = GetClientPhone.getPhone()
    let itemClose = document.querySelector('[data-js=button-close]')
    let footerItems = document.querySelector('[data-js=footer-btn]')
    let title = document.querySelector('[data-js=h1]')
    let promo = document.querySelector('[data-js=promo-data]')
    let plans = document.querySelector('[data-js=plans-data]')
    let confirm = document.querySelector('[data-js=confirm-btn]')
    if(sizeScreen === 'big'){
        itemClose.classList.add('close-item-big-screen')
        footerItems.classList.add('footer-big-screen')
        title.classList.add('title-padding-big-screen')
        promo.classList.add('promo-padding-big-screen')
        plans.classList.add('plans-padding-big-screen')
        confirm.classList.add('continue-padding-big-screen')
    } else {
        itemClose.classList.add('close-item-small-screen')
        footerItems.classList.add('footer-small-screen')
        title.classList.add('title-padding-small-screen')
        promo.classList.add('promo-padding-small-screen')
        plans.classList.add('plans-padding-small-screen')
        confirm.classList.add('continue-padding-small-screen')
    }
}