import de from '../assets/texts/de.json';
import en from '../assets/texts/en.json';
import es from '../assets/texts/es.json';
import fr from '../assets/texts/fr.json';
import ja from '../assets/texts/ja.json';
import pt from '../assets/texts/pt.json';

export default class MultiLanguageTexts {
    static selectedLanguage = 'en';

    setLanguage() {
        const languages = ['en', 'de', 'es', 'fr', 'ja', 'pt'];
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');

        if (!urlLang) {
            const systemLanguage = navigator.language.split('-')[0];
            if (languages.includes(systemLanguage)) {
                this.selectedLanguage = systemLanguage;
            }
        } else if (languages.includes(urlLang)) {
            this.selectedLanguage = urlLang;
        }

        document.getElementById('lang-element').setAttribute('lang', this.selectedLanguage);
    }

    static getTexts() {
        const texts = {de, en, es, fr, ja, pt};
        const lang = document.getElementById('lang-element').getAttribute('lang');
        return texts[lang] || en;
    }
}