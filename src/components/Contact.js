import React from 'react'

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null, email: null, message: null, notify: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        let data = {
            text: `\nFrom : ${this.state.name}\n`
                + `Email : ${this.state.email}\n`
                + `Message : ${this.state.message}\n`
        };

        fetch('https://hooks.zapier.com/hooks/catch/5745862/o22rij6/', {
            method: 'POST',
            crossDomain: true,
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        }).then(res => {
            this.setState({
                name: '', email: '', message: '', notify: true
            });

            setTimeout(() => {
                this.setState({notify: false})
            }, 5000)
        })
    };

    render() {
        return (
            <section id="contact">
                <div className="inner">
                    <section>
                        {this.state.notify &&
                        <div className={'alert alert-success'}>
                            Your message sent successfully. We will get back to you
                            as soon as possible.</div>
                        }
                        <form method="post" action="#" onSubmit={this.handleSubmit}>
                            <div className="field half first">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" value={this.state.name}
                                       onChange={this.handleChange} required/>
                            </div>
                            <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" value={this.state.email}
                                       onChange={this.handleChange} required/>
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="6" value={this.state.message}
                                          onChange={this.handleChange} required/>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" className="special"/></li>
                                <li><input type="reset" value="Clear"/></li>
                            </ul>
                        </form>
                    </section>
                    <section className="split">
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-envelope"></span>
                                <h3>Email</h3>
                                <a href="#">akshaypjoshi@gmail.com</a>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-phone"></span>
                                <h3>Phone</h3>
                                <span>(+91) 86004 54907 </span>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        );
    }
}

export default Contact
