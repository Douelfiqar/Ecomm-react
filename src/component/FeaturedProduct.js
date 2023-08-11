import React, { useContext } from 'react'
import { useProductsContext } from '../context/product_context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Error from './Error'

const FeaturedProduct = () => {
  const { products_loading: loading, products_error: error, featured_products: featured } = useProductsContext()
  
  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }
  return (
    <Wraper>
      <h1>Featured Products</h1>
      <div className='center-underline'>
        <div className="underline"></div>
      </div>
        <div className='articls'>
          {
            featured.slice(0,3).map((item)=>{
              return (<Link key={item.id} to={`/product/${item.id}`}><article className='article' key={item.id}>
              <img src={item.image} alt="" />
              <div className='text-content'>
                <h5>{item.name}</h5>
                <span>${item.price}</span>
              </div>
          </article></Link>)
            })
          }
        </div>
    </Wraper>
  )
}

const Wraper = styled.section`
  background-color: hsl(210, 36%, 96%);
  display: grid;
  justify-content: center;
  gap: 20;
  padding: 80px 20px;
  overflow-x: hidden;
  .articls{
    display: flex;
    max-width: 1200px;
    justify-content: center;
    margin-top: 30px;
  }
  .center-underline{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .underline{
    background-color: hsl(22, 31%, 67%);
    width: 100px;
    height: 4px;
    border-radius: 4px;
    margin-bottom: 25px;
    
  }
  h1{
    text-align: center;
    letter-spacing: 1px;
    font-weight: 700;
    margin-top: 10px;
  }
  .article{
    margin-left: 30px;
  }
  img{
    width: 350px;
    height: 230px;
    object-fit: cover;
    border-radius: 4px;
  }
  .text-content{
    display: flex;
    text-transform: capitalize;
    justify-content: space-between;
    align-items: center;
    /* padding: 0 10px; */
    span{
      color: hsl(22, 31%, 60%);
      font-weight: 600;
      letter-spacing: 1px;
    }
    h5{
      color: hsl(209, 61%, 16%);
      font-size: 15px;
    }
    }

    a{
      text-decoration: none;
    }

    @media screen and (max-width: 992px) {
      .articls{
        display: flex;
        flex-direction:column;
        justify-content: center;
        margin-top: 30px;
      }
      img{
        width: 550px;
        height: 230px;
        object-fit: cover;
        border-radius: 4px;
      }
    }

`

export default FeaturedProduct