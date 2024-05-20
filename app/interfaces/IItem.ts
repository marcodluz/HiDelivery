export interface IItem {
  id?: number;
  title?: string;
  description?: string;
  image?: string | null;
  minPrice?: number;
  maxPrice?: number;
  quantity?: number;
}
