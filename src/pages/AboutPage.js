import React from 'react'
import { PageHero } from '../component/PageHero'
import styled from 'styled-components'

const AboutPage = () => {
  return (
    <main className='aboutpage'>
      <PageHero page="about"/>
      <Wraper>
       <div className='about-center'>
          <img className='img' width={"200px"} src="https://github.com/john-smilga/react-course-comfy-sloth-starter/blob/main/src/assets/hero-bcg.jpeg?raw=true" alt="" />
          
          <div className='about-textcontent'>
            <h1>our story</h1>
            <div className="underline"></div>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi ullam quia veniam modi esse delectus optio minus, doloremque beatae atque quisquam! Necessitatibus eaque ipsa nisi nihil perspiciatis recusandae excepturi dolorum ex sed laudantium optio, iusto distinctio quis praesentium dolores asperiores veniam ullam ipsum reiciendis vel dicta similique quibusdam. Nam!  
            </p>
          </div>
       </div>
      </Wraper>
    </main>
  )
}

const Wraper = styled.section`
  min-height: calc(80vh - 5rem);
  width: 90vw;
  padding-left: 20px;
  padding-right: 0px;
  
  .img{
    width: 90vw;
    height: 70vh;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .about-textcontent{
    margin-left: 0px;
    overflow-x: hidden;
  }
  .underline{
    background-color: hsl(22, 31%, 67%);
    width: 70px;
    height: 4px;
    border-radius: 4px;
    margin-bottom: 25px;
  }
  h1{
    text-transform: capitalize;
    color: hsl(209, 61%, 16%);
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 5px;
    padding: 0;
  }
  p{
    color: hsl(209, 34%, 30%);
    letter-spacing: 1px;
    margin-bottom: 5rem;
    overflow:auto;
  }
  
  @media screen and (min-width: 992px) {
      display: flex;
      justify-content: center;
      padding-top :30px ;
      margin-left: 30px;
    .about-center{
      display: flex;
      width: 1050px;
      padding-left: 60px;
    }
    .img{
      height: 400px;
      width: 400px;
      box-shadow: 1px 1px 10px #555;
      /* filter: drop-shadow(5px 5px 10px #555); */
      border-radius: 4px;
      margin-right: 60px;
    }
    .about-textcontent{
      width: 420px;
      font-size: 0.8rem;
    }
    h1{
      font-size: 1.9rem;
      margin-top: -10px;
    }
    .underline{
      width: 80px;
    }
    @media screen and (min-width: 1200px) {
      .about-textcontent{
      width: 500px;
      font-size: 1rem;
    }
    p{
      margin-bottom: 0;
    }
    }

  }
`

export default AboutPage