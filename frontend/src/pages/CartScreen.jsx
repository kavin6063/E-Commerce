import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const CartScreen = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Shopping Cart
        </h2>

        {/* Product Header Row */}
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">
            Product
          </div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">
              Delivery Charge
            </span>
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>

        {/* Product 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
          <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1701162850.png"
                alt="perfume bottle"
                className="xl:w-[140px] rounded-xl object-cover"
              />
            </div>
            <div className="pro-data w-full max-w-sm">
              <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                Latest N-5 Perfume
              </h5>
              <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                Perfumes
              </p>
              <h6 className="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center">
                ${productPrice}.00
              </h6>
            </div>
          </div>
          <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
            <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
              ${deliveryCharge}.00
            </h6>
            <div className="flex items-center w-full mx-auto justify-center">
              <button
                className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                onClick={() => handleQuantityChange(-1)}
              >
                <svg
                  className="stroke-gray-900 group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M16.5 11H5.5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="border-y border-gray-200 text-gray-900 font-semibold text-lg w-full max-w-[118px] text-center bg-transparent py-[15px]"
                value={quantity}
                readOnly
              />
              <button
                className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                onClick={() => handleQuantityChange(1)}
              >
                <svg
                  className="stroke-gray-900 group-hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11 5.5V16.5M16.5 11H5.5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
              ${quantity * productPrice}.00
            </h6>
          </div>
        </div>

        {/* Subtotal, Delivery, and Total */}
        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Sub Total
            </p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${quantity * productPrice}.00
            </h6>
          </div>
          <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Delivery Charge
            </p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${deliveryCharge}.00
            </h6>
          </div>
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
              Total
            </p>
            <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
              ${quantity * productPrice + deliveryCharge}.00
            </h6>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <button className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-50 justify-center hover:bg-indigo-100">
            <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">
              Add Coupon Code
            </span>
          </button>
          <button className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-600 justify-center hover:bg-indigo-700">
            <span className="px-2 font-semibold text-lg leading-8 text-white">
              Proceed to Checkout
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartScreen;
