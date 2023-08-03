import React from 'react'
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/product_context'

export const CartButton = () => {
    const data = useProductsContext()
  return (
    <Wraper className='cart-btn-wrapper'>
        <Link to="/cart" className='cart-btn' onClick={data.closeSidebar} >
            Cart
            <span className="cart-container">
                <FaShoppingCart className='icon' />
                <span className='cart-value'>12</span>
            </span>
        </Link>
        <button type='button' className='btn-auth' onClick={data.closeSidebar}>
            Login <FaUserPlus />
        </button>
    </Wraper>
  )
}

const Wraper = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 225px;

    .cart-btn{
        text-decoration: none;
        color: hsl(209, 61%, 16%);
        letter-spacing: 1px;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        font-weight: 500;
    }
    .cart-container{
        position: relative;
    }
    .cart-value{
        position: absolute;
        top:-8px;
        right: -12px;
        font-size: 8px;
        background-color: hsl(22, 31%, 52%);
        color: #FFF;
        border-radius: 50%;
        padding: 4px;
        font-weight: 600;
        text-align: center;
    }
    .icon{
        font-size: 15px;
        margin-left: 3px;
    }
    .btn-auth{
        display: flex;
        justify-content: center;
        color: hsl(209, 61%, 16%);
        letter-spacing: 1px;
        background-color: transparent;
        border-color: transparent;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;
        
        svg{
            margin-left: 3px;
        }
    }
`