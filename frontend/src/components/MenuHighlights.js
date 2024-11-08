// components/MenuHighlights.js
import React from 'react';

const MenuHighlights = () => {
    return (
        <section className="py-16 bg-[#f4fde7] text-black w-full">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-8">Menu Highlights</h2>
                <div className="flex justify-center space-x-8">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/gallery/grid/pic1.jpg" alt="Dish 1" className="rounded-lg mb-4 w-full h-40 object-cover" />
                        <h3 className="font-bold text-xl">Dish 1</h3>
                        <p className="text-gray-600">$10.99</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/gallery/grid/pic2.jpg" alt="Dish 2" className="rounded-lg mb-4 w-full h-40 object-cover" />
                        <h3 className="font-bold text-xl">Dish 2</h3>
                        <p className="text-gray-600">$12.99</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/gallery/grid/pic3.jpg" alt="Dish 2" className="rounded-lg mb-4 w-full h-40 object-cover" />
                        <h3 className="font-bold text-xl">Dish 2</h3>
                        <p className="text-gray-600">$12.99</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/gallery/grid/pic4.jpg" alt="Dish 2" className="rounded-lg mb-4 w-full h-40 object-cover" />
                        <h3 className="font-bold text-xl">Dish 2</h3>
                        <p className="text-gray-600">$12.99</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuHighlights;
