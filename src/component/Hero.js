import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Wraper>
      <div className="center-hero">
        <div className='textPart'>
        <h1>Design your comfort zone</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem possimus doloremque vero perspiciatis, hic dolorem inventore quo cupiditate natus, nisi ut obcaecati architecto itaque voluptate recusandae. Repellat nobis voluptate eius expedita esse, ratione obcaecati rem debitis quo veritatis quis enim voluptas similique fuga ipsa labore ab voluptatibus nulla et est.</p>
        <Link className='btn' to={"/products"}>shop now</Link>
        </div>
        <div className='imgPart'>
          <span className='bigg-img'><img src="https://github.com/john-smilga/react-course-comfy-sloth-starter/blob/main/src/assets/hero-bcg.jpeg?raw=true" alt="" className='img1'/></span>
          <span className='small-img'><img src="https://github.com/john-smilga/react-course-comfy-sloth-starter/blob/main/src/assets/hero-bcg-2.jpeg?raw=true" alt="" className='img2' /></span>
        </div>
      </div>
    </Wraper>
  )
}

const Wraper = styled.section`
  display: flex;
  letter-spacing: 1px;
  min-height: calc(100vh - 5rem);
  .imgPart{
    display: none;
  }
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
    color: #FFF;
    text-transform: uppercase;
    width: 95px;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 20px;
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
  @media screen and (min-width: 992px) {
    max-width: 1200px;
    min-height: calc(80vh - 5rem);
    padding-top: 12rem;
    margin: 0 auto; 
    .center-hero{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 120px;
    }
    .imgPart{
      position: relative;
      max-height: 409px;
      display: block;
    }
    .bigg-img{
      position: absolute;
      background-color:  hsl(22, 31%, 81%);
      height: 405px;
      width: 100px;
      border-radius: 4px;
      

    }
    img{
      border-radius: 4px;
      /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); */
      
    }
    .img1{
      height: 450px;
      width: 480px;
      object-fit: cover;
      transform: translateY(-10%);
      margin-left: 50px;
    }
    .small-img{
      position: absolute;
      bottom: 0;
    }
    .img2{
      width: 230px;
      height: 130px;
      transform: translateX(-30%);
    }
    h1{
      font-weight: 700;
    }
    .btn{
      font-size: 13px;
      font-weight: 600;
      padding: 10px 20px;
    }
    
  }
`

export default Hero


