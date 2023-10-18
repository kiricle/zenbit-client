import axios, { AxiosResponse } from 'axios';
import { Deal } from '../models/deal';

export class DealsService {
    static async getDeals(): Promise<AxiosResponse<Deal[]>> {
        return await axios.get<Deal[]>('http://localhost:3000/deals/');
    }
}
