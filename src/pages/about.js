import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Akshay Joshi | About</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>
        <BannerLanding/>
        <div id="main">
            <section id="one">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline5">
                            <div className="timeline">
                                <div className="timeline-icon"><span className="year">1995</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Hello World <br/> </h3>
                                    <p className="description">
                                        Developer is born.
                                    </p>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-icon"><span className="year">2016</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Bachelor Of Engineering <br/> (2012-2016)</h3>
                                    <p className="description">
                                        Graduated in Computer Science & Engineering from Sipna College of Engineering &
                                        Technology, Amravati.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-icon"><span className="year">2016</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Web Developer <br/> (Oct 2016 - March 2017)</h3>
                                    <p className="description">
                                        Worked as Freelancer.
                                    </p>
                                    <br/>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-icon"><span className="year">2017</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Jr. Software Developer <br/> (June 2017 - April 2019) </h3>
                                    <p className="description">
                                        Worked in <a href="https://www.ecosmob.com" target="_blank">Ecosmob Technologies
                                        Pvt. Ltd.</a>
                                    </p>
                                    <br/>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-icon"><span className="year">2019</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Full Stack Developer<br/> (May 2019 - Present) </h3>
                                    <p className="description">
                                        Working in <a href="https://www.bombaysoftwares.com" target="_blank">Bombay Softwares.</a>
                                    </p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Landing
