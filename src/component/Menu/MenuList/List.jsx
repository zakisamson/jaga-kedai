import React from 'react'
import { Link } from 'react-router-dom'
import edit from './assets/edit.svg'
import trash from './assets/trash.svg'
import './list.scss'

function List({product: {productName, productCategory, productId}, products, handleProducts}) {
  const handleDelete = () => {
    const deletedProducts = products.filter(product => product.productId !== productId)
    handleProducts(deletedProducts)
  }
  return (
    <div className='list__container'>
        <div className="list__header">
            <h1 className='list__header__name'>{productName}</h1>
            <p className='list__header__category'>{productCategory}</p>
        </div>
        <div className="list__button__container">
            <Link to={`edit/${productId}`}>
                <img src={edit} alt="" />
            </Link>
            {/* <Link to='delete'> */}
            <img src={trash} alt="" onClick={handleDelete}/>
            {/* </Link> */}
        </div>
    </div>
  )
}

export default List