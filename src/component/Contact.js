import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wraper>
      <h1>join our newsletter and get 20% off</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam nulla vero ducimus voluptate minus, hic repellendus id cumque dolore consequuntur, culpa commodi, sint nihil dolorum deleniti. Excepturi, commodi amet!</p>
      <div className='inptBlock'>
        <input type="email" placeholder='Enter Email'/>
        <button className='btn'>Subscribe</button>
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
padding: 30px 15px;

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
  padding-top: 0.55rem;
  cursor: pointer;
}

`

export default Contact
