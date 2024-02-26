import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'
import { AiOutLineClose } from 'react-icons/ai'
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
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href='/' className={styles.navLogo}>SERGIO</Link>
        <ul className={styles.navItems}>
          {
            data.map(({id,link,caption}) => <li key={id}>
              <Link href={link}>{caption}</Link>
            </li>)
          }
        </ul>
        <div className={styles.navBtns}>
          <button className={styles.themeBtm}><GoMoon/></button>
          <button className={styles.navBtn}><FaBars/></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar