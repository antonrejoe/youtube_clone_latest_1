import React from 'react'
import Searchbar from './Searchbar'

const Navbar = () => {
  const youtubeLogo = "/utils/css/inside/items/youtube2.svg"
  return (
    <>
        <img src={youtubeLogo} alt="s" />
        <Searchbar/>
    
    </>
  )
}

export default Navbar