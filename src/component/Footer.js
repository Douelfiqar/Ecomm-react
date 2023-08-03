import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <h5>
      &copy; {new Date().getFullYear()}
      <span>ComfySloth</span>
      </h5>
      <h5 className='footer-rights'>All rights reserved</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  background-color: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #FFF;
  font-weight: 500;
  span{
    letter-spacing: 1px;
    color: hsl(22, 31%, 52%);
    margin-left: 7px;
    
  }
  h5{
      font-size: 1rem;
      font-weight: 600;
      margin: 0.2rem;
    }
 

  @media (min-width: 992px) {
    flex-direction: row;
  }
  
`

export default Footer