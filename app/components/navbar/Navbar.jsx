"use client"
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { GoMoon, GoSun } from 'react-icons/go'
import { usePathname } from 'next/navigation'

const data = [
  {id: 1, link:'/', caption: 'Home'},
  {id: 2, link:'/about', caption: 'About'},
  {id: 1, link:'/services', caption: 'Services'},
  {id: 1, link:'/portfolio', caption: 'Portfolio'},
  {id: 1, link:'/contact', caption: 'Contact'}
]

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  //check if user is on screen larger than 600px. If so then show nav menu
  useEffect(() => {
    if(window.innerWidth > 600) {
      setNavOpen(true)
    }
  }, [])


  // close dropdown when on small screen
  const closeNavHandler = () => {
    if (window.innerWidth <= 600) {
      setNavOpen(false);
    }
  }

  console.log(pathname)


  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href='/' className={styles.navLogo} onClick={closeNavHandler}>SERGIO</Link>
        {navOpen && <ul className={styles.navItems}>
          {
            data.map(({id,link,caption}) => <li key={id}>
              <Link href={link} onClick={closeNavHandler} className={pathname === link ? 'active' : ""}>{caption}</Link>
            </li>) 
          }
        </ul>
        }
        <div className={styles.navBtns}>
          <button className={styles.themeBtm}><GoMoon/></button>
          <button className={styles.navBtn} onClick={() => setNavOpen(!navOpen)}>{ navOpen ? <AiOutlineClose /> : <FaBars/>}</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar