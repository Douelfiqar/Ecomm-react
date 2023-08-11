import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { links } from '../utils/constants'
import { CartButton } from './CartButton'
import { useProductsContext } from '../context/product_context'

const Sidebar = () => {
  const data = useProductsContext()
  return (
    <SidebarConainer>
      <aside className={data.isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='sidebar-head'>
        <Link to="/">
              <img src="https://raw.githubusercontent.com/john-smilga/react-course-comfy-sloth-starter/f787fc5b82a6e18a3ed5c965002963cfbe46229a/src/assets/logo.svg" alt="" />
        </Link>
        <button className='sidebar-btn' onClick={data.closeSidebar}>
          <FaTimes className='sidebar-close-icon' />
        </button>
        </div>
        <ul className='sidebar-list-container'>
          {links.map((link)=>{
            const {id, text, url} = link;
            return <li className='sidebar-link' key={id} onClick={data.closeSidebar}><Link key={id} to={url}>{text}</Link></li>
          })}
        </ul>
        <div className='sidebar-cart-btn'>
          <CartButton />
        </div>
      </aside>
    </SidebarConainer>
  )
}

const SidebarConainer = styled.div`
  .sidebar{
  width: 100vw;
  height: 100vh;
  background-color: #FFF;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  transform: translateX(-100%);
  transition: 0.3s ease-in-out all;
  }

  .show-sidebar{
    transform: translateX(0);
  }
  ul{
    padding-left: 0;
  }
  li{
    cursor: pointer;
    padding-right: 15px;
    transition: 0.3s ease-in-out all;
  }
  li:hover{
    background-color: hsl(210, 36%, 96%);
    color: hsl(211, 39%, 23%);
    padding-left: 10px;
  }
  .sidebar-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sidebar-close-icon{
    position: absolute;
    top:1.3rem;
    right: 3.5rem;
    font-size: 35px;
    color: hsl(22, 31%, 52%);
    cursor: pointer;
  }
  .sidebar-list-container{
    color: black;
    letter-spacing: 1px;
    list-style: none;
    font-size: 20px;
    text-transform: capitalize;
    
    a{
      text-decoration: none;
      color: hsl(209, 34%, 30%);
    }
  }
  .sidebar-btn{
    background-color: transparent;
    border-color: transparent;
  }
  .sidebar-link{
    letter-spacing: 1px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 0px;
  }
  .sidebar-cart-btn{
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }

  @media screen and (min-width: 992px) {
    .sidebar{
      transform: translateX(-100%);
      transition: 0.3s ease-in-out all;
    }
  }
`
export default Sidebar

