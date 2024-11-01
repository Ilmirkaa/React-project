import React from 'react';

const ProductCard = ({ product, onDetailClick, onOrderClick }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Цена: {product.price}₽</p>
            {product.quantity > 0 ? (
                <button onClick={() => alert('Товар добавлен в корзину')}>В корзину</button>
            ) : (
                <button onClick={() => onOrderClick(product.id)}>Заказать</button>
            )}
            <button onClick={() => onDetailClick(product.id)}>Подробнее</button>
        </div>
    );
};

export default ProductCard;
