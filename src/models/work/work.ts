
export interface WorkData {
    company: string;
    city: string;
    position: number; 
    date_start: string; 
    date_end: string;   
    paragraphs: string[]; 
}


export default class Work {
    company: string;
    city: string;
    position: number; 
    date_start: Date;
    date_end: Date;
    paragraphs: string[]; 

    constructor(company: string, city: string, position: number, date_start: Date, date_end: Date, paragraphs: string[]) {
        this.company = company;
        this.city = city;
        this.position = position;
        this.date_start = date_start;
        this.date_end = date_end;
        this.paragraphs = paragraphs; 
    }

    
    static fromJSON(json: WorkData): Work {
        return new Work(
            json.company,
            json.city,
            json.position,
            new Date(json.date_start),
            new Date(json.date_end),
            json.paragraphs 
        );
    }

    
    toJSON(): WorkData { 
        return {
            company: this.company,
            city: this.city,
            position: this.position,
            date_start: this.date_start.toISOString(),
            date_end: this.date_end.toISOString(),
            paragraphs: this.paragraphs 
        };
    }
}
