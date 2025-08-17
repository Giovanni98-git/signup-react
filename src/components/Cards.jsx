import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
    const product = props.product;
  return (
    <Link className="max-w-sm bg-white border border-gray-300 rounded-2xl shadow-sm" to={`/products/${product.id}`}>
        <img className="rounded-lg" src={product.image_url} alt="" />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.name}</h5>
    </div>
</Link>

  );
}

const Stars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.176 3.61a1 1 0 00.95.69h3.792c.969 0 1.371 1.24.588 1.81l-3.067 2.23a1 1 0 00-.364 1.118l1.176 3.61c.3.921-.755 1.688-1.54 1.118l-3.067-2.23a1 1 0 00-1.175 0l-3.067 2.23c-.784.57-1.84-.197-1.54-1.118l1.176-3.61a1 1 0 00-.364-1.118L2.05 8.037c-.783-.57-.38-1.81.588-1.81h3.792a1 1 0 00.95-.69l1.176-3.61z"/>
      </svg>
    );
  }
  
  return <div className="flex">{stars}</div>;
}