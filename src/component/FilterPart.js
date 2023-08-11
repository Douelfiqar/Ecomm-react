import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context';
import { formatPrice, getUniqueValues } from '../utils/helpers';

const FilterPart = () => {

  const {all_products, filters, filterInput, updateFilters, clearFilters, filterChecked} = useFilterContext();

  const getUniqueCategories = getUniqueValues(all_products, 'category');  
  const getUniqueBrands = getUniqueValues(all_products, 'company');
  const getUniqueColors = getUniqueValues(all_products, 'colors');
  

  return (
    <Wraper>

      <form className='form-controle' onSubmit={(e)=>{e.preventDefault()}}>
       <input type="text" className='searchInput' name='form' placeholder='Search' onKeyUp={(e)=>{filterInput(e)}} />
      </form>

      <h3>category</h3>
      { 
        getUniqueCategories.map((category, index)=>{
          return <button key={index} name="category" value={category} className={category === filters.category ? 'btnCtagory btnCtagoryActive' : 'btnCtagory'} onClick={(e)=>{updateFilters(e)}}>{category}</button>
        })
      }
      <h3>company</h3>
      <select name='brand' onChange={updateFilters} className='optionBrand'>
      {   getUniqueBrands.map((brand, index)=>{
          return <option  key={index} value={brand}>{brand}</option>
          })
      }
        </select>
      <h3>colors</h3>
      <div className='btnParts'>
      <button className='btnCtagory'>all</button>
      {
        getUniqueColors.map((color, index)=>{
          
          if(color !== 'all'){
            return  <button name='colors' value={color} onClick={updateFilters} key={index} 
                          className={filters.color === color ? 'btnColor btnColorActive' : 'btnColor'}
                          style={{background: color}}></button>
          }
          
        })
      }

      </div>
    
      <h3>price</h3>
      <p>{formatPrice(filters.price)}</p>
      <input type="range" className='priceRangee' name='price' onChange={(e)=>filterInput(e)} max={filters.max_price} min={filters.min_price}/>
    
      <span className='shipping'> 
        free shipping <input name='filter' onChange={(e)=>{filterChecked(e)}} className='checkboxShipping' type='checkbox'/>
      </span>
      <button className='btnClear' onClick={()=>{clearFilters()}}>clear filters</button>
    </Wraper>
  )
}

const Wraper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
p{
  color:hsl(209, 34%, 30%);
  letter-spacing: 1px;
  margin-bottom: 5px;
}
.searchInput{
  border-radius: 4px ;
  background-color: hsl(210, 36%, 96%);
  border: none;
  padding: 8px;
  letter-spacing: 1px;
}

h3{
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: capitalize;
  color: hsl(209, 61%, 16%);
  margin-top: 20px;
  margin-bottom: 10px;

}

.btnCtagory{
  border: none;
  background-color: transparent;
  text-align: left;
  color:  hsl(210, 31%, 80%);
    text-transform: capitalize;
  letter-spacing: 1px;
  padding: 5px;
  margin-left: -3px;
  cursor: pointer;

}
.btnCtagoryActive{
  color:  hsl(210, 22%, 49%);
}
.optionBrand{
  background-color: hsl(210, 36%, 96%);
  text-transform: capitalize;
  /* letter-spacing: 1px; */
  border: none;
  border-radius:4px;
  padding: 5px;
  width: 90px;
}
.btnColor{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  opacity: 0.5;
  margin-left: 4px;
  cursor: pointer;
}
.btnColorActive{
  opacity: 1;
}
.btnParts{
  display: flex;
}

.priceRangee{
  width: 150px;
  background-color: #13bba4;
}

.shipping{
  text-transform: capitalize;
  color:hsl(209, 34%, 30%);
  letter-spacing: 1px;
}

.checkboxShipping{
  cursor: pointer;
}

.btnClear{
  border: none;
  border-radius: 4px;
  color: #FFF;
  background-color: hsl(360, 67%, 44%);
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-top: 20px;
  width: 100px;
  padding: 5px 3px;
  cursor: pointer;
}

`

export default FilterPart