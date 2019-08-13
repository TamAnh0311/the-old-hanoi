export class Upload {
    $key: string;
    name:string;
    file: File;
    url?: string;
    progress:number
    describe: string;
    createOn: Date = new Date();

    constructor (
        file: File
    ){
        this.file = file;
    }
}
