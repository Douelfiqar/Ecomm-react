import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Wraper>
      <div className="center-hero">
        <h1>Design your comfort zone</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem possimus doloremque vero perspiciatis, hic dolorem inventore quo cupiditate natus, nisi ut obcaecati architecto itaque voluptate recusandae. Repellat nobis voluptate eius expedita esse, ratione obcaecati rem debitis quo veritatis quis enim voluptas similique fuga ipsa labore ab voluptatibus nulla et est.</p>
        <Link className='btn' to={"/products"}>shop now</Link>
      </div>
    </Wraper>
  )
}

const Wraper = styled.section`
  display: flex;
  letter-spacing: 1px;
  min-height: calc(80vh - 5rem);
  .center-hero{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  .btn{
    text-decoration: none;
    border: transparent;
    background-color: hsl(22, 31%, 52%);
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    padding: 5px 10px;
    color: #FFF;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 400;
    width: 95px;
  }
  h1{
    font-size: 2.3rem;
    text-transform: capitalize;
    max-width: 300px;
    font-weight: 500;
    margin-bottom: 20px;
    color: hsl(209, 61%, 16%);
  }
  p{
    font-size: 0.9rem;
    margin-bottom: 30px;
    line-height: 1.5;
    color: hsl(210, 22%, 49%);
  }
`

export default Hero


