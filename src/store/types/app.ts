
import { User, Hotel, Order, Cart} from './common'

export interface AppState{
    user: User;
    hotels: Array<Hotel>;
    orders: Array<Order>;
    cart: Cart;
}