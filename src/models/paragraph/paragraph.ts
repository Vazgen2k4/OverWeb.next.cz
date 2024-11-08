export interface LanguageContent {
    title: string;
    text: string;
}

export interface ParagraphData {
    ru: LanguageContent;
    en: LanguageContent;
    cs: LanguageContent;
}

export default class Paragraph {
    ru: LanguageContent;
    en: LanguageContent;
    cs: LanguageContent;

    constructor(ru: LanguageContent, en: LanguageContent, cs: LanguageContent) {
        this.ru = ru;
        this.en = en;
        this.cs = cs;
    }


    static fromJSON(json: ParagraphData): Paragraph {
        return new Paragraph(
            json.ru,
            json.en,
            json.cs
        );
    }


    getText(language: keyof ParagraphData): string {
        return this[language].text;
    }


    getTitle(language: keyof ParagraphData): string {
        return this[language].title;
    }


    toJSON(): object {
        return {
            ru: this.ru,
            en: this.en,
            cs: this.cs,
        };
    }
}

