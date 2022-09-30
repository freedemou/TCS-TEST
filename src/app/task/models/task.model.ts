export class Task {

    public id: number;
    public text: string;
    public check: boolean;

    constructor( text: string ) {
        this.text = text;
        this.id = Math.random();
        this.check = false;
    }

}