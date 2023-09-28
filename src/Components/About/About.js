import React from 'react';
import './About.css'

function About(props) {
    return (
        <div id='about'>
            <div className='container mt-5' >
                <h2 className='heading pt-5' >About me</h2>
            <div className='row'>
                <div className='col-md-6 mt-5 '>
                    <div className='aos-init aos-animate'data-aos="fade-down">
                <img src='about.png' className='img-fluid' alt='about-img' width={"500px"} ></img>
                </div>
                </div>
                <div className='col-md-6' id='content'>
                <div className='aos-init aos-animate'data-aos="fade-down">
                     <h2>I'am Selvakumar</h2>
                     <p>A motivated, goal oriented natural team player Wants to convert the challenges into opportunities. Aspiring Full-Stack Web developer who is proficient in both Front-end and Back-end frameworks. Looking forward to work in a 
                        high profile organization and use my current skills and capabilities to contribute to its profitability and growth.</p>
                </div>
               </div>
            </div>
            </div>
        </div>
    );
}

export default About;