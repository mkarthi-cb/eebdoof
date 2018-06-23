
import { User, Hotel, Order } from './common'

export interface AppState{
    user: User;
    hotels: Array<Hotel>;
    orders: Array<Order>;

}