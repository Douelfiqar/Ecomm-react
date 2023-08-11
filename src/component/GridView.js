import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const GridView = ({filtred_products = []}) => {

  return (
    <Wraper>
        {
            filtred_products.map((product)=>{
                return(
                    <article key={product.id}>
                        <Link to={`/product/${product.id}`}><img src={product.image} /></Link>
                        <div className='flex'>
                            <p>{product.name}</p>
                            <span className="price">{formatPrice(product.price)}</span>
                        </div>
                    </article>
                )
            })
        }
    </Wraper>
  )
}

const Wraper = styled.section`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    margin: 0 auto;
/* justify-content: wraper; */
    article{
        flex: 1;
        margin-left: 8px;
        margin-bottom: 1rem;
    }
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 295px;
        margin-top: 5px;
    }
    img{
        width: 320px;
        height: 220px;
        object-fit: cover;
        border-radius: 4px;
    }
    p{
        color: hsl(209, 34%, 30%);
        text-transform: capitalize;
        letter-spacing: 1px;
        font-weight: 600;
    }
    .price{
        color: hsl(22, 31%, 60%);
        letter-spacing: 1px;
        font-weight: 500;
    }

`

export default GridView