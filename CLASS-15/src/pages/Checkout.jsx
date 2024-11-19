import React from 'react';

const checkout = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Checkout</h2>

                <form>
                    {/* Shipping Information */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            required
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="123 Main St"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            required
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="Anytown"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="zip">
                            ZIP Code
                        </label>
                        <input
                            type="text"
                            id="zip"
                            required
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            placeholder="12345"
                        />
                    </div>

                    {/* Order Summary */}
                    <h3 className="text-lg font-semibold mt-6 mb-2">Order Summary</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Product 1 - $20.00</li>
                        <li>Product 2 - $15.00</li>
                        <li>Product 3 - $10.00</li>
                    </ul>
                    <p className="font-bold">Total: $45.00</p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Complete Purchase
                    </button>
                </form>
            </div>
        </div>
    );
};

export default checkout;