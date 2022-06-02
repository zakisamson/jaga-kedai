import React from 'react'
import { products } from '../../products/dataDummy'
import './categories.scss'

function Category({handleCategory, activeCategory, categories}) {
    

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