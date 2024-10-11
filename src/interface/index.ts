export interface IProduct {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  qty: number;
}

export interface ProductState  {
    ProductList:IProduct[];
    isLoading:boolean,
    error:string
}