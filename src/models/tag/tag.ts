export interface TagData {
    id: string;
    name: string;
}

export default class Tag {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    static fromJSON(json: TagData): Tag {
        return new Tag(json.id, json.name);
    }

    toJSON(): object {
        return {
            id: this.id,
            name: this.name,
        };
    }
}
