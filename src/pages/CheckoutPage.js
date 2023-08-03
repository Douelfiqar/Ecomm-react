import React from 'react'
import { PageHero } from '../component/PageHero'
import styled from 'styled-components'

const CheckoutPage = () => {
  return (
    <div>
      <PageHero page={"checkout"} />
      <Wraper className='page'>
        Checkout
      </Wraper>
    </div>
  )
}

const Wraper = styled.div`

`

export default CheckoutPage
