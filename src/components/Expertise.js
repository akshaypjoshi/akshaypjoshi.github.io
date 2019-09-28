import React from 'react'
import HeaderName from './HeaderName'
import aws from '../assets/images/aws.png'
import bitbucket from '../assets/images/bitbucket.png'
import docker from '../assets/images/docker.png'
import github from '../assets/images/github.png'
import javascript from '../assets/images/javascript.png'
import laravel from '../assets/images/laravel.png'
import jira from '../assets/images/jira.png'
import php from '../assets/images/php.png'
import python from '../assets/images/python.png'
import react from '../assets/images/react.png'
import symfony from '../assets/images/symfony.png'
import vuejs from '../assets/images/vuejs.png'
import yii from '../assets/images/yii.png'
import native from '../assets/images/react-native.png'
import mysql from '../assets/images/mysql.png'
import postgresql from '../assets/images/postgresql.png'


import ImageThumb from "./ImageThumb";

const Expertise = (props) => (
    <section id="two">
        <div className="inner">
            <header className="major">
                <h2>Languages & Frameworks</h2>
            </header>
            <ImageThumb src={laravel} name={"Laravel"}/>
            <ImageThumb src={symfony} name={"Symfony"}/>
            <ImageThumb src={yii} name={"Yii"}/>
            <ImageThumb src={python} name={"Python"}/>
            <ImageThumb src={php} name={"PHP"}/>
            <ImageThumb src={javascript} name={"Javascript"}/>
            <ImageThumb src={react} name={"React"}/>
            <ImageThumb src={vuejs} name={"VueJS"}/>
            <ImageThumb src={native} name={"React Native"}/>
        </div>
        <div className="inner">
            <header className="major">
                <h2>Tools & Services</h2>
            </header>
            <ImageThumb src={aws} name={"aws"}/>
            <ImageThumb src={bitbucket} name={"Bitbucket"}/>
            <ImageThumb src={docker} name={"Docker"}/>
            <ImageThumb src={github} name={"Github"}/>
            <ImageThumb src={jira} name={"JIRA"}/>
            <ImageThumb src={mysql} name={"MySQL"}/>
            <ImageThumb src={postgresql} name={"PostgreSQL"}/>
        </div>
    </section>
);

export default Expertise
