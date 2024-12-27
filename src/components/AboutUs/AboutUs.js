import React from 'react'
import styles from './AboutUs.module.css'
import about_us_img from '../../assets/about-us-img.png'

const AboutUs = () => {
    return (
        <div className={styles['about-us-container']}>
            <div className={styles['about-us-details']}>
                <div className={styles['left-section']}>
                    <p className={styles['title']}>About Us</p>
                    <p className={styles['description']}>We believe architecture is more than just buildings—it’s about creating spaces that inspire, comfort, and endure. We specialize in crafting timeless designs that harmonize with their surroundings and reflect the unique vision of our clients. From concept to completion, every project is treated with passion, precision, and creativity.</p>

                    <p className={styles['subtitle']}>Our Philosophy</p>
                    <p className={styles['description']}>We aim to build beautiful, progressive dream homes and buildings that make you comfortable. We have the green thumb and work with you to ensure your vision comes to fruition.</p>
                </div>
                <img src={about_us_img} alt="" />
            </div>
        </div>
    )
}

export default AboutUs
