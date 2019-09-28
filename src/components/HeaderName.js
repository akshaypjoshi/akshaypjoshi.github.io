import React from 'react';
import Typed from "typed.js/src/typed";

class HeaderName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strings: [
                'Hi, I am Akshay.',
                'नमस्ते, मैं अक्षय हूं।',
                'Bonjour, je suis Akshay.',
                'Ciao, sono Akshay.',
                'Hola soy Akshay',
                'Привет, я Акшай.',
                'Hi, I am Akshay.',
            ]
        }
    }

    componentDidMount() {
        const {strings} = this.state;
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <h1 ref={(el) => {
                this.el = el;
            }}/>
        );
    }
}

export default HeaderName
