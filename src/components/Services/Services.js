import React from 'react'
import styles from './Services.module.css'

function Services({ title, image, description }) {
    return (
        // <section className={styles['services-offered-container']}>
        //     <div className={styles['services-offered-card-details']}>
        //         <img src={image} alt={title} className={styles['image']} />
        //         <h3>{title}</h3>
        //         <p>{description}</p>
        //     </div>
        // </section>
        <div className={styles['services-offered-card-details']}>
            <h3 className={styles['title']}>{title}</h3>
            <img src={image} alt={title} className={styles['image']} />
            <p className={styles['description']}>{description}</p>
        </div>
    )
}

export default Services
