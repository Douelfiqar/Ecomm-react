import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

export const Service = () => {
  return (
    <Wraper>
      <h1>custom furniture built only for you</h1>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente optio expedita nisi tempora. Rerum, hic fuga suscipit explicabo dolorem mollitia corporis, in accusantium veniam eaque perspiciatis tenetur eligendi sed!</p>
      {
        services.map((item)=>{
          return (<article key={item.id}>
            <span className='icon'>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>)
        })
      }
    </Wraper>
  )
}

const Wraper = styled.section`
background-color: hsl(22, 31%, 88%);
display: flex;
flex-direction: column;
letter-spacing: 1px;
padding: 20px 10px;
padding-left: 20px;
h1, h3{
  letter-spacing: 1px;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 20px;
  color: hsl(22, 28%, 21%);
}
.text{
  margin-bottom: 20px;
}
p{
  color: hsl(22, 28%, 45%);
  font-size: 0.8rem;
}
article{
  width: 90vw;
  height: 250px;
  background-color: hsl(22, 31%, 67%);
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  text-align: center;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .icon{
    background-color: hsl(22, 31%, 88%);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-top: 30px;
    margin-bottom: 10px;
  }
}


`
export default Service