export class Promotion {
    uuid: string;
    name: string;
    brief: string;
    fromDate: number;
    toDate: number;
    priority: number;
    fromHours: number;
    toHours: number;
    dayOfWeeks: Array<number>;

    constructor() {
        this.priority = 1;
        this.brief = '';
        this.fromDate = 0;
        this.toDate = 0;
        this.fromHours = 0;
        this.toHours = 0;
        this.dayOfWeeks = [];
    }
}
