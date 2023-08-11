import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'

const ListView = ({filtred_products}) => {
  return (
    <Wraper>
      {
        filtred_products.map((product)=>{
          return (
            <article>
              <img src={product.image} alt="" />
              <div className='text-part'>
                <h3>{product.name}</h3>
                <span className='price'>{formatPrice(product.price)}</span>
                <p>{product.description}</p>
                <button className='btn'>details</button>
              </div>
            </article>
          )
        })
      }
    </Wraper>
  )
}

const Wraper = styled.section`

  article{
    display: flex;
    margin-bottom: 35px;
    img{
      min-width: 320px;
      height: 220px;
      object-fit: cover;
      border-radius: 4px;
    }
    .text-part{
      margin-left: 40px;
    }
    h3{
      color:  hsl(209, 61%, 16%);
      text-transform: capitalize;
      font-weight: 700;
      font-size: 22px;
      letter-spacing: 1px;
      margin-top: 10px;
    }

    .price{
      color: hsl(22, 31%, 60%);
      letter-spacing: 1px;
      font-weight: 500;
      padding-top: 10px;
    }
    p{
      color: hsl(209, 34%, 30%);
      letter-spacing: 1px;
      font-size: 15px;
      margin-top: 10px;
    }
    .btn {
      text-transform: uppercase;
      background:  hsl(22, 31%, 52%);
      color: hsl(22, 31%, 88%);
      padding: 0.3rem 0.5rem;
      letter-spacing: 1px;
      display: inline-block;
      font-weight: 400;
      transition: 0.3s ease-in-out all;
      font-size: 0.75rem;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      border-color: transparent;
      margin-top: 10px;
    }
    .btn:hover{
      color: #FFF;
      background:  hsl(22, 31%, 67%);
    }
  }
`

export default ListView