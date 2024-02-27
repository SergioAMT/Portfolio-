import React from 'react'
import Link from 'next/link'
import {MdDesignServices} from 'react-icons/md'
import {FaCode} from 'react-icons/fa'
import { FaServer } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import styles from './services.module.css'

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={`container ${styles.servicesWrapper}`}>
        <Link href='/services' className={`btn ${styles.service}`}>
          <span className={styles.icon}><MdDesignServices /></span>
          <h6 className={styles.title}>UI/UX Desing</h6>
        </Link>
        <Link href='/services' className={`btn ${styles.service}`}>
          <span className={styles.icon}><FaCode /></span>
          <h6 className={styles.title}>FrontEnd</h6>
        </Link>
        <Link href='/services' className={`btn ${styles.service}`}>
          <span className={styles.icon}><FaServer /></span>
          <h6 className={styles.title}>Full Stacks</h6>
        </Link>
        <Link href='/services' className={`btn ${styles.service}`}>
          <span className={styles.icon}><FaLaptopCode /></span>
          <h6 className={styles.title}>Data Analysis</h6>
        </Link>
      </div>
    </section>
  )
}

export default Services