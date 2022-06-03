import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import arrowLeft from './arrow-left.svg';
import './edit-menu.scss'

function EditMenu({handleProduct, products}) {
    const navigate = useNavigate()
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({
        productId: '',
        productName: '',
        productCategory: '', 
        productPrice: 0
    })
    console.log(handleProduct)
    useEffect(() => {
        const selectedProduct = products.find(product => product.productId === Number(id))
        setSelectedProduct(selectedProduct)
    }, [id, products])

    const handleInput = event => {
        event.preventDefault()
        setSelectedProduct({...selectedProduct, [event.target.name]: event.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const editedProduct = products.map(product => product.productId === Number(id) ? {...selectedProduct} : product)
        handleProduct(editedProduct)
        navigate('../menu')
    }

  return (
    <div className='menu__add'>
        <Link to='../menu' className='menu__add__navigation'>
            <img className='menu__add__navigation__back' src={arrowLeft} alt="" />
        </Link>
        <h1 className='menu__add__header'>Edit Product</h1>
        <form className='menu__add__form' onSubmit={handleSubmit} action="">
            <div className="menu__add__form__control">
                <label htmlFor="productName">Product Name</label>
                <input type="text" name='productName' onChange={handleInput} value={selectedProduct.productName}/>
            </div>
            <div className="menu__add__form__control">
                <label htmlFor="productCategory">Product Category</label>
                <input type="text" name='productCategory' onChange={handleInput} value={selectedProduct.productCategory}/>
            </div>
            <div className="menu__add__form__control">
                <label htmlFor="productPrice">Product Price</label>
                <input type="text" name='productPrice' onChange={handleInput} value={selectedProduct.productPrice}/>
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

export default EditMenu