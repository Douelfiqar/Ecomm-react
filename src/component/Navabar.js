import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { links } from '../utils/constants'
import { CartButton } from './CartButton'
import { useProductsContext } from '../context/product_context'

const Navabar = () => {
  const data = useProductsContext()
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src="https://raw.githubusercontent.com/john-smilga/react-course-comfy-sloth-starter/f787fc5b82a6e18a3ed5c965002963cfbe46229a/src/assets/logo.svg" alt="" />
          </Link>
          <button className='toggle-btn' onClick={data.openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className='nav-links'>
        {links.map((item)=>{
          const {id, text, url} = item;
            return (<li key={id}><Link to={url}>{text}</Link></li>)
        })}
        </ul>
        <CartButton />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    
    .nav-center{
      width: 90vw;
      margin: 0 auto;
      max-width: 1170px;
    }
    img{
      width: 175px;
    }
    .nav-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .toggle-btn{
        border: transparent;
        background-color: transparent;
        color: hsl(22, 31%, 52%);
        font-size: 2rem;
        cursor: pointer;
    }
    .nav-links{
      display: none;
    }
    .cart-btn-wrapper{
      display: none;
    }
    @media screen and (min-width: 992px) {
      .toggle-btn{
        display: none;
      }
      .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      }
      .nav-links{
        display: flex;
        list-style: none;
        justify-content: center;
        li{
          margin: 0 0.5rem;
        }
        a {
        color: hsl(209, 34%, 30%);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 1px;
        padding: 0.5rem;
        text-decoration: none ;
        &:hover {
          border-bottom: 2px solid hsl(22, 31%, 52%);
        }
      }
      }
      .cart-btn-wrapper{
        display: grid;
      }
    }
`

export default Navabar