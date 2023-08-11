import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({images = [{url: ""}]}) => {

  const [main, setMain] = useState(images[0])
  const [indexPointer, setIndexPointer] = useState(0)
  const choiseMainImage = (index) => {
    
      // setMain(index)
      setIndexPointer(index)
      // indexPointer = index;
      }

  return (
    <Wraper>
      <img className='mainImage' src={images[indexPointer].url} />
      <div className='small-images'>
        {images.map((image, index)=>{
          return (<img key={index} className={indexPointer === index ? "whiteBorder" : ""} onClick={()=>choiseMainImage(index)} src={image.url} />)
        })}
      </div>
    </Wraper>
  )
}

const Wraper = styled.div`
  max-width: 710px;
  margin-top: 15px;
  margin-left: -10px;
  img{
    border-radius: 4px;
    object-fit: cover;
    
  }
  .whiteBorder{
    border: 3px solid hsl(22, 28%, 45%);
  }
  .mainImage{
    width: 90vw;
    margin-left: 10px;
  }
  .small-images{
    display: flex;
    width: 78px;
    height: 78px;
    margin-top: 5px;
    cursor: pointer;
    img{
      margin-left: 10px;
    }
  }
  hr{
    width: 80vw;
  }
  @media screen and (min-width: 992px) {
    .mainImage{
      width: 550px;
      height: 450px;
    }
    .small-images{
      width: 70px;
      height: 70px;
    }
  }
`
export default ProductImages
