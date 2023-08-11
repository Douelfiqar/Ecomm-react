import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar, BsFillStarFill } from "react-icons/bs"
export const Stars = ({stars, reviews}) => {


    const tempStarts = Array.from({length: 5}, (_, index)=>{

      return (<span key={index}>{stars > index+1 ? <BsStarFill /> : stars > index+0.5 ? <BsStarHalf /> : <BsStar /> }</span>)
    })
  

  return (
    <Wraper>
      <div className='stars'>
        <span>{tempStarts}</span>
      </div>
      <p>reviews: ({reviews} custumers reviews)</p>
    </Wraper>
  )
}
const Wraper = styled.div`
display: flex;
.stars{
  margin-top: 12px;
}
span{
  color: #FFDF00;
}
p{
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-left: 15px;
}
`
export default Stars