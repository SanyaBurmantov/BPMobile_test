
import PlansService from "../../services/plans.service";
import {getConfirmButtonTemplate, getFooterButtonTemplate, getPlansTemplate} from "./button.template";
import MultiLanguageTexts from "../../languages";

export class Plans{
    container
    plansData
    constructor() {
        this.plansData = PlansService.getPlansData()
        this.container = document.querySelector('[data-js=plans-data]')

    }

    render() {
        if(!this.plansData.length) return
        this.container.innerHTML = this.plansData.map(plan => getPlansTemplate(plan)).join('');
    }
}

export class Button{
    container
    textButton
    constructor() {
        this.container = document.querySelector('[data-js=confirm-btn]')
        this.textButton = MultiLanguageTexts.getTexts().Continue
    }

    render() {
        if(!this.textButton) return
        this.container.innerHTML = getConfirmButtonTemplate(this.textButton)
    }
}

export class FooterButtons{
    container
    textButton
    constructor() {
        this.container = document.querySelector('[data-js=footer-btn]')
        this.textButton = [{text: MultiLanguageTexts.getTexts()["Terms of Use"]},{text: MultiLanguageTexts.getTexts()["Privacy Policy"]},{text: MultiLanguageTexts.getTexts().Restore}]
    }

    render(){
        if(!this.textButton) return
        this.container.innerHTML = this.textButton.map(text => getFooterButtonTemplate(text)).join('');
    }
}