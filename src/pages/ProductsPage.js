import React from 'react'
import { ChoiseTypeView, FilterPart, GridView, ListView, PageHero } from '../component'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const ProductsPage = () => {

  const {all_products, filtred_products, grid_view} = useFilterContext()

  return (
    <>
    <PageHero page={"products"} />
    <Wraper>
      <div className='center-content'>
          <div>
            <FilterPart />
          </div>
          <div className='views'>
            <ChoiseTypeView lengthProduct={filtred_products} />
            {grid_view && <GridView filtred_products={filtred_products} />}
            {!grid_view && <ListView filtred_products={filtred_products} />}
          </div>
      </div>
    </Wraper>
    </>
  )
}

const Wraper = styled.section`  
  margin-top: 70px;
  display: flex;
  justify-content: center;
  .center-content{
    width: 1200px;
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
  .views{
    display: flex;
    flex-direction: column;
  }
`

export default ProductsPage