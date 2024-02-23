export interface IOrder {
  id: string;
  distance: string;
  items: Array<object>;
  time: string;
  price: string;
  orderTime: number;
  accepted: boolean;
}
