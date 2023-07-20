import React from "react";
import { saveAs } from "file-saver";
import '../assets/css/Resume.css';
import ResumeImg from '../assets/img/Screenshot (1).png';

const Resume = () => {

        const handleDownloadPDF = () => {
          const pdfURL = 'public/Devon_Eadie_-_.pdf';
          saveAs(pdfURL, 'DevonEadiesResume.pdf');
        };


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
               <button onClick={handleDownloadPDF} id="downloadBtn" value="download">Download Resume</button>
            </div>
        </div>
    )
};

export default Resume;