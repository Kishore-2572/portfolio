import React from 'react'
import  './portfolio.css'
import amazona from '../../assets/amazona.png'
import mykec from '../../assets/mykec.jpeg'
import salonbooking from '../../assets/salonbooking.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={amazona} alt="" />
          </div>
          <h3>An ecommerce website developed with MERNstack</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/Kishore-2572/mern-ecommerce" className='btn' target='_blank' >Github</a>
            <a href="https://amazona-yblw.onrender.com/" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={mykec} alt="" />
          </div>
          <h3>It is mobile application developed for my college staffs</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/Kishore-2572/my-kec" className='btn' target='_blank' >Github</a>
            <a href="https://mykec.kongu.edu/IMAGES/app-release.apk" className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item" title="Live Demo isn't available">
          <div className="portfolio-item-img">
            <img src={salonbooking} alt="" />
          </div>
          <h3>Salon Booking website developed with flask</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/Kishore-2572/salon-booking" className='btn'  target='_blank' >Github</a>
            <a href="https://zrog.onrender.com/" className='btn btn-primary disable-demo' >Live Demo</a>
          </div>
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio
