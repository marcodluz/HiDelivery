import { IItem } from "./IItem";

export interface IOrder {
  id?: string;
  distance?: string;
  items?: Array<IItem>;
  time?: string;
  price?: string;
  orderTime?: number;
  accepted?: boolean;
}
