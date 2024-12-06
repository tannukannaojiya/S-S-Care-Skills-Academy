import React from 'react'

const AddCart = () => {
  return (
    <div>
      <div className="max-w-md mx-auto mt-16 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400">
    <div className="px-4 py-2 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Add To Cart</h2>
    </div>
    <div className="flex flex-col divide-y divide-gray-200">
        <div className="flex items-center py-4 px-6">
            <img className="w-16 h-16 object-cover rounded" src="https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-little-cute-robot-funny-virtual-assistant-bot-png-image_11549965.png" alt="Product Image"/>
            <div className="ml-3">
                <h3 className="text-gray-900 font-semibold">Product Name</h3>
                <p className="text-gray-700 mt-1">₹9.99</p>
            </div>
            <button className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
        Remove
      </button>
        </div>
        <div className='flex justify-between'>
        <h1 className='py-4 px-6 '>SUBTOTAL (TAX INCL.)</h1>
        <h1 className="py-4 px-6">19</h1>
        </div>
        <div className='flex justify-between'>
        <h1 className='py-4 px-6 '>TOTAL (TAX INCL.)</h1>
        <h1 className="  py-4 px-6">19</h1>
        </div>
        
    </div>
    <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
        <h3 className="text-gray-900 font-semibold">Total: ₹29.98</h3>
        <button className="py-2 px-4 bg-green-500  hover:bg-green-600 text-white rounded-lg">
      Payment
    </button>
    </div>
</div>
    </div>
  )
}

export default AddCart;
