export const cart = [

]

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