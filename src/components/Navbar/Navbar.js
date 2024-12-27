import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <nav className={styles['navbar']}>
            <div className={styles['logo-container']}>
                <img src={logo} alt="Logo" className={styles['logo-img']} />
                <div className={styles['logo']}>AM Designs</div>
            </div>
            <div className={styles['tabs']}>
                <a href="#home">Home</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact Us</a>
            </div>
        </nav>
    )
}

export default Navbar
