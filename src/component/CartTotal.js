import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'

const CartTotal = () => {

    const {totalAmount, shipping_fee} = useCartContext()

  return (
    <Wrapper>
        <div className="shipping">
            <h3>subtotal :        </h3>
            <h3>{formatPrice(totalAmount)}</h3>
        </div>
        <div className="shipping">
        <p>Shipping fee :  </p>
        <p>{formatPrice(shipping_fee)}</p>
        </div>
        
        <div className="hr"></div>
        <div className="shipping">
        <h2>order total : </h2>
        <h2>{formatPrice(totalAmount + shipping_fee)}</h2>
        </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
    height: 170px;
    border: 1.5px solid hsl(209, 23%, 60%, 0.5);
    width: 300px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 20px;
    letter-spacing: 1px;
    text-transform: capitalize;
    padding-top: 30px;
    overflow-x: hidden;
    p{
        margin-top: 20px;
    }
    
    .hr{
    width: 300px;
    height: 1px;
    background-color:  hsl(209, 23%, 60%);
    opacity: 0.5;
    margin-top: 25px;
    margin-bottom: 25px;  
    }

    .shipping{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;
    }
`

export default CartTotal