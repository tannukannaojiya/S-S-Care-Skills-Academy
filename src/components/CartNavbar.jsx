import React from 'react';

const CartNavbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Academy</h1>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
          Cart
        </button>
      </div>
    </nav>
  );
};

export default CartNavbar;
