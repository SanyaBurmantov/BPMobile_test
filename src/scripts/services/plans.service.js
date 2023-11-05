import MultiLanguageTexts from "../languages";

export default class PlansService{
    static getPlansData(){
        const texts = MultiLanguageTexts.getTexts()
        return [{text: texts["YEARLY ACCESS"], description: texts["Just {{price}} per year"], price: texts["{{price}} <br>per week"], stopper: texts["BEST OFFER"]}, {text: texts["WEEKLY ACCESS"], price: texts["{{price}} <br>per week"]}]
    }
}