
export interface User{
  id:number;
  name:string;
  email:string;
  role: string;
}

export interface Hotel{
  id: number;
  name: string;
  items: Array<Item>;

}

export interface Item{
  id : number;
  hotel: Hotel;
  name:string;
  code: string;
  price: number;
  type: Array<string>;
}

export interface Order{
  hotel: Hotel;
  user: User;
  date: Date;
  total: number;
  state: string;
  items: Array<OrderItem>;
}

export interface OrderItem{
  order: Order;
  item: Item;
  price: number;
  quantity: number;
  data: string;
  state: string;
}

export interface Cart{
  items: Array<OrderItem>;
}

export interface Delivery{
  hotel: Hotel;
  user : User;
  date: string;
  total: number;
  state: string
}

export interface DeliveryOrder{
  delivery: Delivery;
  order: Order;
}

export interface Invoice{
  subTotal: number;
  discount: number;
  total: number;
  date: string;
  state: string;
}

export interface LineItem{
  invoice: Invoice;
  item: Item;
  unit_amount: number;
  quantity: number;
  amount: number;
  date: string
}


export interface Error {
  _source : any;
  exceptionType: string;
  paramMessage: string;
  paramName: string;
  message: string;
}