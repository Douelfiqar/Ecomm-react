import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PageHero = ({page}) => {
  return (
    <Wraper>
        <div className="section-center">
            <Link to={"/"}>Home </Link><span> / {page}</span>
        </div>
    </Wraper>
  )
}


const Wraper = styled.section`
    min-height: 20vh;
    width: 100%;
    background-color: hsl(22, 31%, 88%);
    display: flex;
    align-items: center;
    font-size: 25px;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-weight: 550;
    margin-bottom: 20px;
    .section-center{
        width: 90vw;
        margin: 0 auto;
        padding-left: 0.5;
    }
    a{
        text-decoration: none;
        color: hsl(22, 31%, 52%);
    }
    span{
        color: hsl(209, 61%, 16%);
        margin-left: 8px;
    }
    @media screen and (min-width: 992px) {
     .section-center{
        width: 58vw;
     }   

    }
`