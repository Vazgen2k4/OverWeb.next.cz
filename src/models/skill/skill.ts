export interface LanguageContent {
    name: string;
    description: string;
}

export interface SkillData {
    ru: LanguageContent;
    en: LanguageContent;
    cs: LanguageContent;
    image: string;
}

export default class Skill {
    ru: LanguageContent;
    en: LanguageContent;
    cs: LanguageContent;
    image: string;

    constructor(ru: LanguageContent, en: LanguageContent, cs: LanguageContent, image: string) {
        this.ru = ru;
        this.en = en;
        this.cs = cs;
        this.image = image;
    }


    static fromJSON(json: SkillData): Skill {
        return new Skill(
            json.ru,
            json.en,
            json.cs,
            json.image
        );
    }


    getName(language: keyof SkillData): string {
        return (this[language] as LanguageContent).name;
    }


    getDescription(language: keyof SkillData): string {
        return (this[language] as LanguageContent).description;
    }


    toJSON(): object {
        return {
            ru: this.ru,
            en: this.en,
            cs: this.cs,
            image: this.image,
        };
    }
}

