import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <WraperErrorPage>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <button className="error-btn-backhome"><Link to={"/"}>back home</Link></button>
      </section>
    </WraperErrorPage>
  )
}

const WraperErrorPage = styled.main`
  height: calc(100vh - 5rem);
  background-color: hsl(22, 31%, 88%);
  width: 100%;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;

  h1{
    font-size: 12rem;
    font-weight: 700;
    color: hsl(209, 61%, 16%);
  }
  a{
    text-decoration: none;
    color: #FFF;
    transition: 0.3s ease-in-out all;
  }
  a:hover{
    color: hsl(209, 61%, 16%);
  }
  h3{
    font-size: 3rem;
    margin-bottom: 15px;
    color: hsl(209, 61%, 16%);
  }
  .error-btn-backhome{
    background-color: hsl(22, 31%, 52%);
    text-transform: uppercase;
    border: transparent;
    padding: 8px 12px;
    border-radius: 4px;
    letter-spacing: 1px;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.2);
    cursor: pointer;
    transition: 0.3s ease-in-out all;
  }
  .error-btn-backhome:hover{
    background-color: hsl(22, 31%, 67%);
  }
`

export default ErrorPage