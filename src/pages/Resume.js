import React from "react";
import '../assets/css/Resume.css';
import ResumeImg from '../assets/img/Screenshot (1).png';

const Resume = () => {

    // // const downloadTxtFile = () => {
    // //     const downloadlink =  document.createElement("a");
    // //     element.href = URL.createObjectURL("file:///S:/Documents/PDF's/Resume/Devon_Eadie_-_.pdf");
    // //     element.download = "100ideas-" + Date.now() + ".txt";
    // }

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