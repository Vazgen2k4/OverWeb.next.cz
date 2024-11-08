export interface Title {
    ru: string;
    en: string;
    cs: string;
}

export interface ProjectData {
    id: string;
    title: Title;
    target: string;
    paragraphs: string[];
    tags: string[];
    skills: string[];
    image: string;
}

export default class Project {
    id: string;
    title: Title;
    target: string;
    paragraphs: string[];
    tags: string[];
    skills: string[];
    image: string;

    constructor(id: string, title: Title, target: string, paragraphs: string[], tags: string[], skills: string[], image: string) {
        this.id = id;
        this.title = title;
        this.target = target;
        this.paragraphs = paragraphs;
        this.tags = tags;
        this.skills = skills;
        this.image = image;
    }

    static fromJSON(json: ProjectData) {
        return new Project(
            json.id,
            json.title,
            json.target,
            json.paragraphs,
            json.tags,
            json.skills,
            json.image
        );
    }

    getTitle(language: keyof Title): string {
        return this.title[language] || this.title.en;
    }

    addParagraph(paragraphLink: string): void {
        this.paragraphs.push(paragraphLink);
    }

    addTag(tag: string): void {
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
        }
    }

    removeTag(tag: string): void {
        this.tags = this.tags.filter(t => t !== tag);
    }

    addSkill(skill: string): void {
        if (!this.skills.includes(skill)) {
            this.skills.push(skill);
        }
    }

    removeSkill(skill: string): void {
        this.skills = this.skills.filter(s => s !== skill);
    }

    toJSON(): ProjectData {
        return {
            id: this.id,
            title: this.title,
            target: this.target,
            paragraphs: this.paragraphs,
            tags: this.tags,
            skills: this.skills,
            image: this.image,
        };
    }
}
