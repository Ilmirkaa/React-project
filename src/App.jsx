import React, { useState } from 'react';
import Header from './components/Header';


import Accordion from './components/Accordion';
import ProductCard from './components/ProductCard';
import Modal from './components/Modal';
import productsData from './data/products';
import './app.css';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const filteredProducts = productsData
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(product => !category || product.category === category)
        .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  const handleOrderClick = (id) => {
    setSelectedProductId(id);
    setModalOpen(true); // Открываем модальное окно
};


    const handleModalSubmit = (email) => {
        alert(`Заказ на продукт с ID ${selectedProductId} отправлен на ${email}`);
        setModalOpen(false);
    };

    return (
        <div>
            <Header 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                category={category} 
                setCategory={setCategory} 
                sortOrder={sortOrder} 
                setSortOrder={setSortOrder} 
            />
            <Accordion />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onDetailClick={(id) => alert(`Детали продукта: ${id}`)} 
                        onOrderClick={handleOrderClick} 
                    />
                ))}
            </div>
            <Modal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                onSubmit={handleModalSubmit} 
            />
        </div>
    );
};

export default App;
