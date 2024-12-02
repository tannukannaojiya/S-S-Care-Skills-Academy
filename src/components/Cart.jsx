// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, clearCart } from '../features/cartSlice';

// const Cart = () => {
//   const { cartItems, total } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Cart</h2>
//       {cartItems.map((item) => (
//         <div
//           key={item.id}
//           className="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-4"
//         >
//           <div>
//             <h3 className="font-bold">{item.title}</h3>
//             <p>${item.price} x {item.quantity}</p>
//           </div>
//           <button
//             onClick={() => dispatch(removeFromCart(item))}
//             className="text-red-600"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <h3 className="text-xl font-bold">Total: ${total}</h3>
//       <button
//         onClick={() => dispatch(clearCart())}
//         className="bg-red-600 text-white px-4 py-2 mt-4 rounded-md"
//       >
//         Clear Cart
//       </button>
//     </div>
//   );
// };

// export default Cart;

import React from 'react'

const Cart = () => {
  return (
    <div>
      
    </div>
  )
}

export default Cart

