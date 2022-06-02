import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../SideBar/assets';
import arrowLeft from './arrow-left.svg';
import './add-menu.scss'

function AddMenu({handleProduct, products}) {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        if(productName && productCategory && productPrice){
            handleProduct([...products, {
                productId: products.length + 1,
                productName,
                productCategory,
                productPrice,
                productImage: assets.defaultPlaceholder
            }])
            navigate('../menu')
        }
    }

    const handleNameInput = (e) => {
        e.preventDefault()
        setProductName(e.target.value)
    }
    const handleCategoryInput = (e) => {
        e.preventDefault()
        setProductCategory(e.target.value)
    }
    const handlePriceInput = (e) => {
        e.preventDefault()
        setProductPrice(e.target.value)
    }

  return (
    <div className='menu__add'>
        <Link to='../menu' className='menu__add__navigation'>
            <img className='menu__add__navigation__back' src={arrowLeft} alt="" />
        </Link>
        <h1 className='menu__add__header'>Add New Product</h1>
        <form className='menu__add__form' action="" onSubmit={handleSubmit}>
            <div className="menu__add__form__control">
                <label htmlFor="productName">Product Name</label>
                <input type="text" onChange={handleNameInput}/>
            </div>
            <div className="menu__add__form__control">
                <label htmlFor="productCategory">Product Category</label>
                <input type="text" onChange={handleCategoryInput}/>
            </div>
            <div className="menu__add__form__control">
                <label htmlFor="productPrice">Product Price</label>
                <input type="text" onChange={handlePriceInput}/>
            </div>
            <div className="menu__add__form__control">
                <label htmlFor="productImage">Product Image</label>
                <input type="text" />
            </div>
            <input className='menu__add__form__button' type="submit" />
        </form>
    </div>
  )
}

export default AddMenu