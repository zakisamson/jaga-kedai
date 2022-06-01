import React, { useState } from 'react'
import { products } from '../../products/dataDummy'
import './categories.scss'

function Category() {
    const [activeCategory, setActiveCategory] = useState('all');
    const categories = ['All', ...new Set(products.map(product => product.productCategory))];

    const handleCategory = (string) => {
        setActiveCategory(string);
    }

    return (
        <div className='categories-container'>
            {categories.map((category, index) => {
                return (
                <h1 key={index} 
                    className='category'
                    onClick={() => handleCategory(category)}
                    style={{
                        backgroundColor: activeCategory === category ? '#FEB74D' : 'transparent'
                    }}>
                    {category}
                </h1>
                )
            })}
        </div>
    )
}

export default Category