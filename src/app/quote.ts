export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public publishDate: Date){
        this.showDescription=false;
      }
    }
