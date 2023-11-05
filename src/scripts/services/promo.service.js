import Images from "../images";
import MultiLanguageTexts from "../languages";

export default class PromoService{
    static getPromosData(){
        const images = Images.getImages()
        const texts = MultiLanguageTexts.getTexts()
        return [{image: images.Slide1, text: texts["Unlimited Art <br>Creation"]}, {image: images.Slide2, text: texts["Exclusive <br>Styles"]},{image: images.Slide3, text: texts["Magic Avatars <br>With 20% Off"]}]
    }
}