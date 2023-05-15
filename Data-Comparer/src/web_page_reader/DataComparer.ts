import { DataReader } from "./DataReader";

export class DataComparer{

    constructor(
        private readonly firstDataToCompare: DataReader,
        private readonly secondDataToCompare: DataReader
        ){} 

    async compareNumberOfSpaces(): Promise<string> {
        const firstNumberOfSpaces = await this.getNumberOfSpaces(this.firstDataToCompare);
        const secondNumberOfSpaces = await this.getNumberOfSpaces(this.secondDataToCompare);
    
        return this.compare(firstNumberOfSpaces, secondNumberOfSpaces, "spaces");
    }
    
    async compareNumberOfDots(): Promise<string> {
        const firstNumberOfDots = await this.getNumberOfDots(this.firstDataToCompare);
        const secondNumberOfDots = await this.getNumberOfDots(this.secondDataToCompare);
    
        return this.compare(firstNumberOfDots, secondNumberOfDots, "dots");
    }
    
    async compareNumberOfCommas(): Promise<string> {
        const firstNumberOfCommas = await this.getNumberOfCommas(this.firstDataToCompare);
        const secondNumberOfCommas = await this.getNumberOfCommas(this.secondDataToCompare);
    
        return this.compare(firstNumberOfCommas, secondNumberOfCommas, "commas");
    }
    
    private async getNumberOfSpaces(dataReader: DataReader): Promise<number> {
        return dataReader.numberOfSpaces();
    }
    
    private async getNumberOfDots(dataReader: DataReader): Promise<number> {
        return dataReader.numberOfDots();
    }
    
    private async getNumberOfCommas(dataReader: DataReader): Promise<number> {
        return dataReader.numberOfCommas();
    }

    private compare(first: number, second: number, name: string): string {
        if(first > second){
            return `${name} is greater than ${second}`;
        } else if (first < second) {
            return `${name} is less than ${second}`;
        } else {
            return `${name} is equal to ${second}`;
        }
    }   
}