export interface DataReader{
    loadData(): Promise<string>;
    numberOfSpaces(): Promise<number>;
    numberOfDots(): Promise<number>;
    numberOfCommas(): Promise<number>;
}