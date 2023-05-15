import axios from 'axios';
import { DataReader } from './DataReader';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RemoteWebPageReader implements DataReader {
    constructor(private readonly url: string) {}
  
    async loadData(): Promise<string> {
      const data = await axios.get(this.url);
      return data.data;
    }
  
    async numberOfSpaces(): Promise<number> {
      const data = await this.loadData();
      return data.split(' ').length - 1;
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