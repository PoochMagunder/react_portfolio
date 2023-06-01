import React from "react";
import '../assets/css/Aboutme.css';
import myphoto from '../assets/img/Profile 1.jpg';
import vancouverphoto from '../assets/img/vancouver.webp';

const Aboutme = () => {

    return (
            <div className="about-wrapper">
                <header className="about-header">
                    About Me
                </header>
                <div className="my-image">
                    <img className="image"
                        src={myphoto}
                        alt="my-picture"></img>
                </div>
                <aside className="my-info">
                    <p>Hello! My name is Devon Eadie and i am a Full Stack Web Developer.</p>
                </aside>
                <div className="skills-info">
                    <header className="my-skills-header">My Skills</header>
                    <ol className="skills-list">
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>React</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>MySQL</li>
                    <li>Git</li>
                    <li>Responsive Design</li>
                    <li>Bulma</li>
                    <li>Bootstrap</li>
                    <li>SEO</li>
                    </ol>
                </div>
                <div className="im-from-wrapper">
                    <header className="location-info">My Home?</header>
                    <p className="info-p">I am from the beautiful city of Vancouver B.C!</p>
                    <img className="vancouver"
                        src={vancouverphoto}
                        alt="vancouver"></img>
                </div>
            </div>
    )
};

export default Aboutme;