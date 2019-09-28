import React from 'react'
import {Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import Expertise from "../components/Expertise";

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Akshay Joshi | Full Stack Developer "
                    meta={[
                        {
                            name: 'description',
                            content: 'I am Full Stack developer from Ahmedabad, India. I have more than 2 years of experience in different technologies.'
                        },
                        {
                            name: 'keywords',
                            content: 'Akshay Joshi, Full Stack Developer in Ahmedabad, Full Stack Developer in Udaipur, Web Developer in Ahmedabad, Web Developer In Udaipur, Full Stack Developer in India, Web Developer in India'
                        },
                    ]}
                >
                </Helmet>
                <Banner/>
                <div id="main">
                    <Expertise/>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
