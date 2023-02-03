import { useEffect, useState } from 'react'

import './Header.scss'

import { TbSearch } from 'react-icons/tb'
import { CgShoppingCart } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">JSDEVSTORE.</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
