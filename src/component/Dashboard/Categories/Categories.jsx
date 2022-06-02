import React from 'react'
import './categories.scss'

function Category({handleCategory, activeCategory, products}) {
    const categories = ['All', ...new Set(products.map(product => product.productCategory))];

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