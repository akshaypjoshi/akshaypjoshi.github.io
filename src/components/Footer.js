import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://www.facebook.com/akshay.joshi4" className="icon alt fa-facebook"><span
                    className="label">Facebook</span></a></li>
                <li><a href="https://www.linkedin.com/in/akshaypjoshi/" className="icon alt fa-linkedin"><span
                    className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/akshaypjoshi" className="icon alt fa-github"><span
                    className="label">GitHub</span></a></li>
                <li><a href="https://stackoverflow.com/users/7589318/akshaypjoshi"
                       className="icon alt fa-stack-overflow"><span className="label">Stack Overflow</span></a></li>
                <li><a href="https://twitter.com/akshaypjoshi" className="icon alt fa-twitter"><span
                    className="label">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/akshaypjoshi/" className="icon alt fa-instagram"><span
                    className="label">Instagram</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; akshaypjoshi</li>
            </ul>
        </div>
    </footer>
)

export default Footer
