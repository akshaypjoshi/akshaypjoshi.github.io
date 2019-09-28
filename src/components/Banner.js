import React from 'react'
import HeaderName from './HeaderName'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <HeaderName/>
            </header>
            <div className="content">
                <p>I am Full Stack Developer.<br/>
                I have more than 2 years of experience in Backend & Frontend Development.</p>
            </div>
        </div>
    </section>
)

export default Banner
