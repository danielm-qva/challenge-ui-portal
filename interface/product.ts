export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  rate?: {
    start: number;
    count: number;
  };
  price: number;
  image?: {
    height: number;
    url: string;
    width: number;
  };
  discount?: string;
  isNew: boolean,
}
