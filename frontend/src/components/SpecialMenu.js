// components/SpecialMenu.js
import React from 'react';

const SpecialMenu = () => {
    const dishes = [
        {
            name: "Dish 1",
            image: "gallery/grid3/pic1.jpg", // Update with your actual image path
            detail: "A delicious blend of flavors."
        },
        {
            name: "Dish 2",
            image: "gallery/grid3/pic2.jpg", // Update with your actual image path
            detail: "A classic favorite with a twist."
        },
        {
            name: "Dish 3",
            image: "gallery/grid3/pic3.jpg", // Update with your actual image path
            detail: "Fresh ingredients, expertly prepared."
        },
        {
            name: "Dish 4",
            image: "gallery/grid3/pic4.jpg", // Update with your actual image path
            detail: "A gourmet experience in every bite."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-8">Special Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dishes.map((dish, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={dish.image}
                                alt={dish.name}
                                className="rounded-lg mb-4 w-full h-auto object-cover" // Use h-auto for height auto
                            />
                            <h3 className="font-bold text-xl">{dish.name}</h3>
                            <p className="text-gray-600 mb-4">{dish.detail}</p>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 "
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialMenu;
