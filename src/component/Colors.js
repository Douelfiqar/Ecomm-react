import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import styled from 'styled-components'

const Colors = ({product}) => {

  const  {id, stock, colors} = product

  const [mainColor, setMainColor] = useState(0)
  const [quantite, setQuantite] = useState(1)

  const decrease = () =>{
    if(quantite > 1){
      let quantiteCopy = quantite;
      setQuantite(quantiteCopy=quantiteCopy - 1)
    }
  }

  const increase = () =>{
    if(quantite < stock){
      let quantiteCopy = quantite;
      setQuantite(quantiteCopy=quantiteCopy + 1)
    }
  }
  return (
    <Wraper>
      <div className="colors">
        <p>Colors: </p>
        <span>
          {product && product.colors && colors.map((color, index)=>{
            return <button key={index} onClick={()=>{setMainColor(index)}} className={mainColor === index ?'btn-color active':"btn-color"} style={{background: color}}>{mainColor === index ? <FaCheck className="icon" /> : null}</button>
          })}
        </span>
      </div>
      <div className='quantite'>
        <button onClick={()=>{decrease()}}>-</button>
        <h3>{quantite}</h3>
        <button onClick={()=>{increase()}}>+</button>
      </div>
    </Wraper>
  )
}

const Wraper = styled.div`
  .btn-color{
    border-radius: 50%;
    border: none;
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    opacity: 0.5;
  }
  .colors{
    display: flex;
    align-items: center;
    span{
      margin-left: 70px;
      display: flex;
      align-items:center;
    }
    
  }
  p{
    font-weight: 700;
  }
  .active{
    opacity: 1;
  }
  .quantite{
    display: flex;
    align-items: center;
    margin: 15px 0;
    h3{
      margin: 0 10px;
      font-size: 30px;
    }
    button{
      border: none;
      background-color: transparent;
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
    }

}
`
export default Colors