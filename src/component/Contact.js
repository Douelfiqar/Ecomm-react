import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wraper>
      <div className='services-grid'>
        <div className='text-content'>
        <h1>join our newsletter and get 20% off</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam nulla vero ducimus voluptate minus, hic repellendus id cumque dolore consequuntur, culpa commodi, sint nihil dolorum deleniti. Excepturi, commodi amet!</p>
        </div>
        <div className='inptBlock' >
          <form action="">
            <input type="email" placeholder='Enter Email'/>
            <button className='btn'>Subscribe</button>
          </form>
        </div>
      </div>
    </Wraper>
  )
}

const Wraper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
letter-spacing: 1px;
padding: 80px 15px;
width: 90vw;
overflow-x: hidden;
h1{
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1rem;
  text-align: start;
  width: 91vw;
  margin-bottom: 20px;
  color: hsl(209, 61%, 16%);
}
p{
  font-size: 0.8rem;
  color: hsl(210, 22%, 49%);
  margin-bottom: 20px;
}
input{
  width: 50vw;
  margin-left: 0;
  padding: 0.4rem 1rem;
  padding-bottom: 0.5rem;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right: none;
  border: 2px solid #222;
  font-size: 1rem;
}
.inptBlock{
  width: 90vw;
}
.btn{
  color: #FFF;
  background-color: hsl(22, 31%, 52%);
  border: transparent;
  padding: 0.5rem 1rem;
  margin-left: -1px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 2px solid #222;
  /* padding-top: 0.55rem; */
  height: 35.5px;
  cursor: pointer;
}
@media screen and (min-width: 992px) {
  margin-top: 200px;
  padding-bottom: 200px;
  .services-grid{
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20;
  }
  .text-content{
    max-width: 550px;
  }
  .inptBlock{
    max-width: 550px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  input{
    width: 340px;
    height: 30px;
  }
  h1{
    font-size: 30px;
    font-weight: 700;
  }
  .btn{
    /* padding-top: 0.9rem; */
    height: 47.5px;
  }
}

`

export default Contact
