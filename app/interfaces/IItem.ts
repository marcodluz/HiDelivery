export interface IItem {
  id?: string;
  title?: string;
  description?: string;
  image?: string | null;
  minPrice?: number;
  maxPrice?: number;
  quantity?: number;
}
