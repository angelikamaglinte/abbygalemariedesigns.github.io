import React from 'react';
import Hero from '../../components/Hero/Hero'
import styles from './HomePage.module.css';
import Services from '../../components/Services/Services';
import residential_img from '../../assets/residential-projects-card.png'
import commercial_img from '../../assets/commercial-projects-card.png'
import interior_img from '../../assets/interior-design-card.png'
import AboutUs from '../../components/AboutUs/AboutUs';

const HomePage = () => {
    const servicesData = [
        {
            title: 'Residential Projects',
            description:
                "Your home is more than just a place to live—it's where life happens. We create bespoke residential designs that reflect your lifestyle, priorities, and vision. From concept to completion, we ensure every detail enhances comfort, aesthetics, and functionality.",
            image: residential_img,
        },
        {
            title: 'Commercial Projects',
            description:
                "We design dynamic commercial spaces that align with your business goals and brand identity. From modern office spaces to impactful retail environments, we focus on creating solutions that inspire productivity, attract customers, and set you apart.",
            image: commercial_img,
        },
        {
            title: 'Interior Design',
            description:
                'Our interior design services bring harmony and style to any space. Whether transforming homes, offices, or retail areas, we focus on blending practicality with your personal or professional style, creating interiors that are both timeless and inviting.',
            image: interior_img,
        },
    ];

    return (
        <div className={styles['container']}>
            <Hero />
            {/* <section className="section">
                <p className={styles['services-offered-title']}>Services Offered</p>
                <Services
                    title="Residential Projects"
                    description="Your home is more than just a place to live—it's where life happens. We create bespoke residential designs that reflect your lifestyle, priorities, and vision. From concept to completion, we ensure every detail enhances comfort, aesthetics, and functionality."
                    image={residential_img}
                />
                <Services
                    title="Commercial Projects"
                    description="We design dyynamic commercial spaces that align with your business goals and brand identity. From modern office spaces to impactful retail environments, we focus on creating solutions that inspire productivity, attract customers, and set you apart."
                    image={commercial_img}
                />
                <Services
                    title="Interior Design"
                    description="Our interior design services bring harmony and style to any space. Whether transforming homes, offices, or retail areas, we focus on blending practicality with your personal or professional style, creating interiors that are both timeless and inviting."
                    image={interior_img}
                />
            </section> */}
            <section className={styles['services-offered-container']}>
                <p className={styles['services-offered-title']}>Services Offered</p>
                <div className={styles['services-container']}>
                    {servicesData.map((service, index) => (
                        <Services
                            key={index}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                </div>
            </section>
            <AboutUs />
        </div>
    );
};

export default HomePage;
