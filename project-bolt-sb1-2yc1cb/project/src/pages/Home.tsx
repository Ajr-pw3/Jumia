import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import ProductCard from '../components/product/ProductCard';

const featuredProducts = [
  {
    id: 1,
    title: "Nike Air Max 270",
    price: 150,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    rating: 4,
    discount: 15
  },
  {
    id: 2,
    title: "Samsung Galaxy S21",
    price: 799,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    rating: 5
  },
  {
    id: 3,
    title: "MacBook Pro 16",
    price: 2399,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    rating: 5,
    discount: 10
  },
  {
    id: 4,
    title: "Sony WH-1000XM4",
    price: 349,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    rating: 4
  }
];

const Home = () => {
  return (
    <div>
      <HeroSlider />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;