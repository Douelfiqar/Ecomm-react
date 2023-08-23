import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'

const CartTotal = () => {

    const {totalAmount, shipping_fee} = useCartContext();
    const totalAmountFeeShipping = () => {
        const getTotalAmountString = formatPrice(totalAmount)
        const getFeeShippingString = formatPrice(shipping_fee)
        const getTotalAmountNum = parseInt(getTotalAmountString.slice(1))
        const getFeeShippingNum = parseInt(getFeeShippingString.slice(1))
        
        return getTotalAmountNum + getFeeShippingNum
    }
    let totalAm;

    useEffect(()=>{

        totalAm = formatPrice(totalAmount)

    }, [totalAmount])

    totalAmountFeeShipping()
  return (
    <Wrapper>
        <div className="shipping">
            <h3>subtotal :        </h3>
            <h3>{totalAm}</h3>
        </div>
        <div className="shipping">
        <p>Shipping fee :  </p>
        <p>{formatPrice(shipping_fee)}</p>
        </div>
        
        <div className="hr"></div>
        <div className="shipping">
        <h2>order total : </h2>
        <h2>${totalAmountFeeShipping()}</h2>
        </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
    height: 200px;
    border: 1.5px solid hsl(209, 23%, 60%, 0.5);
    width: 360px;
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
    width: 360px;
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
        width: 360px;
    }
`

export default CartTotal