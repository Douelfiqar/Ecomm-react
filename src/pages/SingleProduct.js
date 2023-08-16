import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductsContext } from '../context/product_context'
import { single_product_url } from '../utils/constants'
import styled from 'styled-components'
import { Colors, Error, Loading, PageHero, ProductImages, Stars } from '../component'
import { formatPrice } from '../utils/helpers'
import { useCartContext } from '../context/cart_context'

const SingleProduct = () => {
  const {id} = useParams()
  const {single_product_loading: laoding, product, single_product_error:error, fetchSingleProduct} = useProductsContext()
  
  useEffect(()=>{
    
    fetchSingleProduct(single_product_url+id)
  }, [])

  if(laoding){
    return <Loading />
  }
  if(error){
    return <Error />
  }
  return (
    <>
    <PageHero page={product.name} products={true} />
    <Wraper >
      
      <div className="center-content">
          <Link to="/products"><button className='btn'>back to products</button></Link>

          <div className='bigg-screen'>
          <ProductImages images={product.images} />
          
          <div>
            <h3>{product.name}</h3>

            <Stars stars={product.stars} reviews={product.reviews} />

            <span className='price'>{formatPrice(product.price)}</span>
            <p>{product.description}</p>
            <p>Available : {product.stock > 0 ? 'In Stock' : 'Out of stock'}</p>
            <p>SKU : {product.id}</p>
            <p>Brand : {product.company}</p>
            <hr />

            {product.stock > 0 && <Colors product={product} />}
          </div>
          </div>
      </div>
    </Wraper>
    </>
  )
} 

const Wraper = styled.section`
  padding: 20px;

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
  h3{
    text-transform: capitalize;
    font-size: 23px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 10px;
  }

  .price{
    letter-spacing: 1px;
    font-weight: 600;
    color: hsl(22, 31%, 60%);
    font-size: 14px;
  }

  p{
    color: hsl(209, 34%, 30%);
    padding: 10px 0;
    letter-spacing: 1px;
  }

  
  @media screen and (min-width: 992px){
    display: flex;
    justify-content: center;
    padding: 50px 0;
    margin-top: 30px;
    margin-bottom: 100px;
    .bigg-screen{
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 1200px;
      gap: 30px;
    }

    img{
      width: 200px;
    }
    h3{
      font-size: 28px;
    }
    p{

    }
  }
`

export default SingleProduct