import React, { useEffect } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const ChoiseTypeView = ({lengthProduct}) => {

  const {grid_view, displayGridView, displayListView, updateProduct } = useFilterContext()
  
  return (
    <Wraper>
      <div className="btn-container">
        <button type='button'className={grid_view ? "active" : null} onClick={()=>{displayGridView()}} ><BsFillGridFill /></button>  
        <button type='button' className={grid_view ? "btn2" : "active btn2"} onClick={()=>{displayListView()}}><BsList /></button>
      </div>

      <div className='center'>
       <span>({lengthProduct.length} product found)</span>
        <hr />
      </div>
      <form action="">
        <label htmlFor="">sort by : </label>
        <select onChange={updateProduct}>
          <option value="lowest-price">price (lowest)</option>
          <option value="highest-price">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>

      </form>
    </Wraper>
  )
}

const Wraper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  button{
    cursor: pointer;
    /* margin-left: 5px; */
    border: solid 0.2px #222;
    background-color: transparent;
    border-radius: 4px;
    padding: 2px 4px;
  }
  .btn2{
    margin-left: 4px;
  }
  hr{
    min-width: 20vw;
  }
  .center{
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      margin-right: 80px;
    }
  }
  option{
    text-align: center;
  }
  select{
    border-radius: 4px;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 5px 5px;
  }
  label{
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  span{
    text-transform: capitalize;
    letter-spacing: 1px;
    font-weight: 500;
  }
  .active{
    color: #FFF;
    background-color: #222;
  }
`
export default ChoiseTypeView