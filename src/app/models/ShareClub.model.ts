import {WatchList} from './watchlist.model';
import {PortfolioItem} from './portfolioItem.model';

export class ShareClub {
 id: number;
 name: string;
 extraOptions: boolean;
 watchlists: WatchList[];
 portfolioItems: PortfolioItem[];
}
