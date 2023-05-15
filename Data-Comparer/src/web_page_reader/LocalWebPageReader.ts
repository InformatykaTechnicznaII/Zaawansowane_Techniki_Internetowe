import * as fs from 'fs';
import { DataReader } from './DataReader';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalWebPageReader implements DataReader {
    constructor(private readonly filePath: string) {}

    async loadData(): Promise<string> {
        const data = await fs.promises.readFile(this.filePath, 'utf-8');
        return data;
    }

    async numberOfSpaces(): Promise<number> {
        const html = await this.loadData();
        return html.split(' ').length - 1;
    }

    async numberOfDots(): Promise<number> {
        const data = await this.loadData();
        return data.split('.').length - 1;
    }

    async numberOfCommas(): Promise<number> {
        const data = await this.loadData();
        return data.split(',').length - 1;
    }
}