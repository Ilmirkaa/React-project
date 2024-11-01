import React from 'react';

const Header = ({ searchTerm, setSearchTerm, category, setCategory, sortOrder, setSortOrder }) => {
    return (
        <header>
            <h1>Магазин ковров</h1>
            <input 
                type="text" 
                placeholder="Поиск по названию" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Все категории</option>
                <option value="восточные">Восточные</option>
                <option value="современные">Современные</option>
                <option value="классические">Классические</option>
            </select>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Цена ↑</option>
                <option value="desc">Цена ↓</option>
            </select>
        </header>
    );
};

export default Header;
