import CartContext from '@/context/CartContext';
import Constants from '@/ults/Constant';
import React, { useContext, useState } from 'react';
import { AiFillPlusCircle, AiOutlineMinusCircle, AiFillDelete, AiOutlineLeft, AiOutlineCreditCard } from 'react-icons/ai';
import { FaPaypal } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Link from 'next/link';

const Checkout = () => {
    const { cart, addItemToCart, deleteItemFromCart } = useContext(CartContext);
    const [showGiftCardModal, setShowGiftCardModal] = useState(false); // State to control the visibility of the gift card modal
    const [giftCardCode, setGiftCardCode] = useState(''); // State to store the entered gift card or coupon code
    const cartItems = cart?.cartItems;
    const [discountedTotal, setDiscountedTotal] = useState(null);

    const handleApplyGiftCard = () => {
        // Check if the entered gift card code is "hometex"
        if (giftCardCode.toLowerCase() === 'hometex') {
            // Reduce the total amount by 10%
            const newDiscountedTotal = totalSum * 0.9;
            // Update the discounted total in the state
            setDiscountedTotal(newDiscountedTotal);
        }
        // Reset the gift card code input field and hide the modal
        setGiftCardCode('');
        setShowGiftCardModal(false);
    };

    const increaseQty = (cartItem) => {
        const newQty = parseInt(cartItem?.quantity) + 1;

        let price = cartItem?.price;
        let total_price = newQty * price;
        const item = { ...cartItem, quantity: newQty, total_price: total_price };
        if (newQty > Number(cartItem.stock)) return;

        addItemToCart(item);
    };

    const toggleGiftCardModal = () => {
        setShowGiftCardModal(!showGiftCardModal);
    };

    const renderGiftCardModal = () => {
        if (!showGiftCardModal) return null;

        return (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Gift Card / Coupon</h2>
                    {/* Input field for entering the gift card code */}
                    <input
                        type="text"
                        value={giftCardCode}
                        onChange={(e) => setGiftCardCode(e.target.value)}
                        placeholder="Enter gift card or coupon code"
                        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
                    />
                    {/* Apply button */}
                    <button onClick={handleApplyGiftCard} className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white">Apply</button>
                    {/* Cancel button */}
                    <button onClick={toggleGiftCardModal} className="mt-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md ml-2">Cancel</button>
                </div>
            </div>
        );
    };

    const decreaseQty = (cartItem) => {
        const newQty = parseInt(cartItem?.quantity) - 1;
        let price = cartItem?.price;
        let total_price = newQty * price;

        const item = { ...cartItem, quantity: newQty, total_price: total_price };

        if (newQty <= 0) return;

        addItemToCart(item);
    };

    const totalSum = cart?.cartItems?.reduce((accumulator, cartItem) => {
        return accumulator + parseFloat(cartItem.total_price);
    }, 0);

    return (
        <>
            <div className="container mx-auto py-20 px-36">
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-12'>
                        <h1 className="font-bold pb-3 relative inline-block mb-3 text-xl">
                            SHOPPING BAG
                            <span className="absolute bottom-0 left-0 w-2/5 h-1 bg-yellow-500"></span>
                        </h1>
                        <div className="flex flex-col gap-4">
                            {cart?.cartItems?.map((cartItem) => (
                                <div className="flex flex-row justify-between shadow-md p-4 gap-4 bg-white rounded-lg transition duration-300 ease-in-out hover:shadow-xl" key={cartItem.product_id}>
                                    <img
                                        src={`${Constants.BASE_URL}/images/uploads/product_thumb/${cartItem.image.photo}`}
                                        alt={cartItem.name}
                                        title={cartItem.name}
                                        className="w-auto h-[200px] object-cover rounded-lg"
                                    />
                                    <div className="flex-grow">
                                        <p className="text-xl font-semibold text-gray-800">{cartItem.name}</p>
                                        <p className="text-sm text-gray-500 pt-3">Type: {cartItem.sub_categoryName}</p>
                                        <p className="text-sm text-gray-500 pt-3">Size: {cartItem.child_sub_categoryName}</p>
                                        <p className="text-lg font-bold text-green-600 pt-3">TK {cartItem.total_price}</p>
                                        <div className="flex items-center py-2 mt-2">
                                            <button
                                                onClick={() => increaseQty(cartItem)}
                                                className="text-gray-600 hover:text-green-500 focus:outline-none"
                                                aria-label="Increase quantity"
                                            >
                                                <AiFillPlusCircle size={24} />
                                            </button>
                                            <input
                                                type="text"
                                                name={`quantity[${cartItem.product_id}]`}
                                                value={cartItem.quantity}
                                                size="3"
                                                className="mx-2 text-center form-input rounded-md border border-gray-300 w-12"
                                                readOnly
                                            />
                                            <button
                                                onClick={() => decreaseQty(cartItem)}
                                                className="text-gray-600 hover:text-red-500 focus:outline-none"
                                                aria-label="Decrease quantity"
                                            >
                                                <AiOutlineMinusCircle size={24} />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            onClick={() => deleteItemFromCart(cartItem?.product_id)}
                                            className="text-gray-600 hover:text-red-500 cursor-pointer"
                                            aria-label="Delete item"
                                        >
                                            <BsXLg size={24} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-row justify-between px-3 mt-3 gap-10'>
                            <div>
                                <Link href="/">
                                    <button className='mt-20 flex gap-2 items-center justify-between border rounded-full px-3 py-2 font-bold'><AiOutlineLeft /> <span className='text-xl'>Continue Shopping</span></button>
                                </Link>
                            </div>
                            <div>
                                <Link href="/payment_method">
                                    <button className='mt-20 flex gap-2 items-center justify-between border rounded-full px-3 py-2 font-bold'><span className='text-xl'>Next</span></button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className='px-4 py-3 shadow-lg rounded-lg bg-white'>
                                <div className='flex gap-28 justify-between items-center p-3'>
                                    <p className='text-gray-800 font-medium'>Subtotal</p>
                                    <p className='text-gray-900 font-semibold'>TK {totalSum}</p>
                                </div>
                                <div className='flex justify-between items-center p-3 border-t border-gray-200'>
                                    <p className='text-gray-800 font-medium'>Delivery</p>
                                    <p className='text-green-600 font-semibold'>Free</p>
                                </div>
                                <button onClick={toggleGiftCardModal} className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Apply Gift Card / Coupon</button>
                                {renderGiftCardModal()}

                                <div className='flex justify-between items-center p-3 border-t border-gray-200 mt-2'>
                                    <p className='text-lg text-gray-800 font-bold'>Total</p>
                                    <p className='text-lg text-green-700 font-bold'>TK {discountedTotal ? discountedTotal : totalSum}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  );
};

export default Checkout;