import React from 'react'

function Order({orderedItem}) {
  return (
    <div>
        {orderedItem.map((item, index) => {
            return(
                <div key={index}>
                    <h1>{item.productName}</h1>
                    <h1>{item.productPrice}</h1>
                    <h1>{item.quantity}</h1>
                </div>
                )
            })
        }
    </div>
  )
}

export default Order