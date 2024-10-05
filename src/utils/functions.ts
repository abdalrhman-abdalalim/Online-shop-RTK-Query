import { IProduct } from "../interface";

export const addItemToShoppingCart = (cartItems:IProduct[],product:IProduct)=>{

  // If exits 
  const exits = cartItems.find(item=>item.id===product.id);

  if(exits){
    return cartItems.map(item=>{
      return item.id === product.id ? {...item, qty:item.qty + 1} : item;
    });
  }
  return [...cartItems,{...product,qty:1}];
}