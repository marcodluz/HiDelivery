export interface IOrder {
  id: string;
  distance: string;
  items: Array<{
    id: number;
    title: string;
    image: string | null;
    quantity: number;
    minPrice: number;
    maxPrice: number;
  }>;
  time: string;
  price: string;
  orderTime: number;
  accepted: boolean;
}
