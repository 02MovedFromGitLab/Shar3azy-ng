import {Stock} from './stock.model';

export class PortfolioItem{
  Id: number;
  stock: Stock;
  notes: string;
  owned: number;
  priceAtLastTransaction: number;
  dateAtLastTransaction: Date;
  valueAtLastTransaction: number;
  active: boolean;
}
