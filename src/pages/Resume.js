import React from "react";
import '../assets/css/Resume.css';
import ResumeImg from '../assets/img/Screenshot (1).png';

const Resume = () => {

    return (
        <div className="resume-wrapper">
            <header className="resume-header">
                My Resume
            </header>
            <div className="resume-container">
                <img className="resume-img"
                        src={ResumeImg}
                        alt="img-of-resume">
                </img>
               <button id="downloadBtn" value="download">Download Resume</button>
            </div>
        </div>
    )
};

export default Resume;