import React from "react";
import acLogo from "../assets/acLogo.png";

const CoursesListCart = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Responsive Header */}
      <header className="w-full black py-4 mb-4">
        <h1 className="text-center text-2xl pb-6 md:text-3xl lg:text-4xl font-bold">
          Shopping Cart
        </h1>
      </header>

      <div className="bg-white shadow-md rounded-md p-4 w-full max-w-4xl">
        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Course Name</th>
                <th className="border border-gray-300 px-4 py-2">Delete</th>
                <th className="border border-gray-300 px-4 py-2">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 2 */}
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={acLogo}
                    alt="Course"
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">Course 1</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  🗑️
                </td>
                <td className="border border-gray-300 px-4 py-2">₹2000</td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Course"
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">Course 2</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  🗑️
                </td>
                <td className="border border-gray-300 px-4 py-2">₹2000</td>
              </tr>
              {/* Subtotal Row */}
              <tr className="bg-gray-100">
                <td colSpan="3" className="border border-gray-300 px-4 py-2 text-right">
                  SUBTOTAL (TAX INCL.)
                </td>
                <td className="border border-gray-300 px-4 py-2">₹2340</td>
              </tr>
              {/* Total Row */}
              <tr className="bg-gray-200 font-bold">
                <td colSpan="3" className="border border-gray-300 px-4 py-2 text-right">
                  TOTAL (TAX INCL.)
                </td>
                <td className="border border-gray-300 px-4 py-2">₹2300</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Button Section */}
        <div className="flex justify-between items-center mt-4">
          <div className="space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Agent Code Name
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Apply Coupon
            </button>
          </div>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesListCart;
