import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from '../../assets/topleft.jpg'
import Image2 from '../../assets/topright.jpg'
import Image3 from '../../assets/bleft.jpg'
import Image4 from '../../assets/bright.jpg'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
        <div className={styles.headerLeft}>
            <h1>Get your  business online the right way</h1>
            <p>Lorem ipsum bla bla bla bla</p>
            <div className={styles.headerCta}>
                <Link href='/portfolio' className='btn'>Projects</Link>
                <Link href='/contact' className='btn primary'>Contact me</Link>
            </div>
        </div>
        <div className={styles.headerRight}>
            <article className={styles.card1}>
                <Image src={Image1} alt=''/>
            </article>
            <article className={styles.card2}>
                <Image src={Image2} alt=''/>
            </article>
            <article className={styles.card3}>
                <Image src={Image3} alt=''/>
            </article>
            <article className={styles.card4}>
                <Image src={Image4} alt=''/>
            </article>
        </div>
    </header>
  )
}

export default Header