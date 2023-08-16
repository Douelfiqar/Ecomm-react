import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartTotal, PageHero } from '../component'
import { FaTrash } from 'react-icons/fa'
import { formatPrice } from '../utils/helpers'

const CartPage = () => {
  const { cart, clear_cart, remove_item, toggleCartAmount  } = useCartContext()

  const increaseAmount = (id, value) => {
    let tempValue = value + 1;
    toggleCartAmount(id, tempValue)
  }
  const decreaseAmount = (id, value) => {
    let tempValue = value - 1;
    toggleCartAmount(id, tempValue)
  }


  if(cart.length === 0){
    return (<Wraper><div className="center-content"><h1>your cart is empty</h1> <Link to="/products"><button className='btn'>FILL IT</button></Link> </div></Wraper>)
  }
  else{
    return (
      <>
      <PageHero page="cart" />
      <Wraper>
       <div className="center-content">
        <div className='titles'>
          <span>item</span>
          <span className='priceTitles'>price</span>
          <span>quantity</span>
          <span>subtotal</span>
        </div>

        <div className='hr'></div>
        
        <div className="section">
          {
            cart.map((item)=>{
              return <article key={item.id}>
              <div className='imgText'>
              <img src={item.image} alt="" />
              <div className='namePlusColor'>
                <h3>{item.name}</h3>
                <p>color : <button className='color' style={{backgroundColor: item.color}}></button></p>
              </div>
              </div>
              <div className='priceDiv'><span className='price'>{formatPrice(item.price)}</span></div>
              <div className='amount'>
                <button className='btnAmount' onClick={()=>{decreaseAmount(item.id, item.amount)}}>-</button>
                <p className='realPrice'>{item.amount}</p>
                <button className='btnAmount' onClick={()=>{increaseAmount(item.id, item.amount)}}>+</button>
              </div>
              <div className='priceDiv'><p className='price moveRight'>{formatPrice(item.amount * item.price)}</p></div>
              <div className='trashDiv'>
                <button className='btnTrash' onClick={()=>{remove_item(item.id)}}><FaTrash /></button>
              </div>
              </article>
            })
          }
        </div>
       </div>
       <div className="hr"></div>
       <div className='btnsShoppingDiv'>
        <Link to="/products"><button className='btnShopping'>continue shopping</button></Link>
        <button className='btnShopping clear' onClick={clear_cart}>clear shopping cart</button>
       </div>

       <div className='cart-total'>
        <CartTotal />
       </div>
      </Wraper>
      </>
    )
    
  }
}

const Wraper = styled.section`
    height: calc(100vh - 6rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .titles{
      display: flex;
      justify-content: space-around;
      width: 1000px;

      span{
        text-align: center;
        color:  hsl(209, 23%, 60%);
        letter-spacing: 1px;
        text-transform: capitalize;
        width: 200px;
      }

    }
    .center-content{
      
      width: 1200px;
      display: flex;
      align-items: center;
      flex-direction: column  ;
    }
    h1{
      text-align: center;
      letter-spacing: 1px;
      font-weight: 700;
      text-transform: capitalize;
      color: hsl(209, 61%, 16%);
      margin-top: 150px;
      font-size: 30px;
      margin-bottom: 20px;
    }
    .btn{
      background-color: hsl(22, 28%, 45%);
      border: none;
      padding: 8px 10px;
      color: #FFF;
      text-transform: capitalize;
      border-radius: 4px;
      letter-spacing: 1px;
      font-weight: 500;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: pointer;
    }

    .priceTitles{
      margin-left: 30px;
    }
    article{
      display: flex;
      justify-content: space-around;
      width: 1200px;
      margin-bottom: 20px;
      img{
        width: 110px;
        height: 90px;
        object-fit: cover;
        border-radius: 4px;
      }
      .imgText{
        display: flex;

      }
      .color{
        height: 15px;
        width: 15px;
        border-radius: 50%;
        opacity: 0.5;
        border: none;
      }
      .namePlusColor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;
        h3{
          color:hsl(209, 34%, 30%);
          text-transform: capitalize;
          letter-spacing: 1px;
          font-size: 15px;
        }
        
        p{
          color: hsl(209, 23%, 60%);
          letter-spacing: 1px;
          text-transform: capitalize;
        }
      }

      .priceDiv{
        display: flex;
        align-items: center;
        /* margin-left: 150px; */
        letter-spacing: 1px;
        color:  hsl(22, 31%, 52%);
        font-weight: 700;
      }
      .btnTrash{
        background-color: hsl(360, 67%, 44%);
        color: #FFF;
        border: none;
        border-radius: 4px;
        padding: 2px 6px;
        height: 30px;
        cursor: pointer;
      }
      .trashDiv{
        display: flex;
        align-items: center;
      }

      .amount{
        display: flex;
        align-items: center;
        /* margin-left: 45px; */
      }

      .btnAmount{
        border: none;
        background-color: transparent;
        font-size: 30px;
        cursor: pointer;
        color:hsl(209, 34%, 30%);
      }

      .realPrice{
        color:hsl(209, 34%, 30%);
        font-size: 30px;
        font-weight: 700;
        margin-left: 2px;
        margin-right: 2px;
      }

      .moveRight{
        margin-right: -90px;
      }

    }

    .hr{
      width: 1050px;
      height: 1px;
      background-color:  hsl(209, 23%, 60%);
      opacity: 0.5;
      margin-top: 15px;
      margin-bottom: 30px;
    }

    .btnsShoppingDiv{
      display: flex;
      justify-content: space-between;
      width: 1050px;
    }

    .btnShopping{
      background-color: hsl(22, 28%, 45%);
      border: none;
      padding: 8px 10px;
      color: #FFF;
      text-transform: capitalize;
      border-radius: 4px;
      letter-spacing: 1px;
      font-weight: 500;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: pointer;
    }
    .clear{
      /* color: #FFF; */
      background-color: #222;
    }

    .cart-total{
      display: flex;
      width: 1050px;
      justify-content: end;
    }
`

export default CartPage