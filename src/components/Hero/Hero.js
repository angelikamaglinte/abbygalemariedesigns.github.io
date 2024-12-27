import React from 'react'
import styles from './Hero.module.css'
import Navbar from '../Navbar/Navbar'
// import { style } from 'framer-motion/client'
// import hero_img from '../../assets/hero-img.png'

const Hero = () => {
    return (
        <div>
            <div className={styles['parallax']}>
                <Navbar />
                <div className={styles['hero-container']}>
                    <div className={styles['hero-details']}>
                        <p className={styles['title']}>
                            Innovative Designs <br />
                            Modern Spaces <br />
                            Eco-Conscious Living
                        </p>
                        <p className={styles['subtitle']}>
                            Your Vision <br />
                            Our Expertise in Action
                        </p>
                        <div className={styles['buttons']}>
                            <button>Inquire Now</button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles['sample']}>
                Scroll Up and Down this page to see the parallax scrolling effect.
                This div is just here to enable scrolling.
                Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div> */}
        </div>
    )
}

export default Hero
