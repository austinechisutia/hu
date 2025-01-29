export const cart = [{
    productIdd: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1
}, {
    productId: "f8a3b6e7-9a6f-4f9b-8e4c-1e2b3d7f1f0c",
    quantity: 2
}];

export function addToCart(productId){
    let martchingItem;
        cart.forEach((cartItem)=>{
          if(productId === cartItem.productId){
            martchingItem = cartItem;
          }  // check if the product is already in the cart and return
        });
  
        if(martchingItem){
          martchingItem.quantity += 1;
        }else{
          cart.push({
            productId,
            quantity: 1
          });
        }
  
         // add the product to the cart
  }