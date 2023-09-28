import React from 'react';
import'./Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3Alt, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";


function Skills(props) {
    return (
        <div id='skills' className='mt-3'>
            <div className='container'>
                <h2  style={{color:'white'}}>Skills</h2 >
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='card h-100'>
                            <div className='card-header' style={{backgroundColor: '#081d2f'}}>
                                <div className='card-title' style={{textAlign:'center'}}>
                                    <h5 style={{color:"white"}}>Front End Technologies</h5>
                                </div>
                                </div>
                                <div className='card-body'>
                                    <ul style={{textAlign:'center',listStyle:'none' , fontSize:'1.5rem'}} >
                                        <li><FontAwesomeIcon icon={faHtml5} style={{color:'#e34f26'}}  /><span>HTML</span> </li>
                                        <li><FontAwesomeIcon icon={faCss3Alt} /><span>CSS</span></li>
                                        <li><FontAwesomeIcon icon={faReact} style={{color:'#00d8ff'}}/><span> React</span></li>
                                        <li><FontAwesomeIcon icon={faJs} style={{color:'#f7df1e'}}/><span>Javascript</span></li>
                                        <li><FontAwesomeIcon icon={faBootstrap} style={{color:'darkblue'}}/><span>Bootstrap</span></li>
                                    </ul>

                                </div>

                        </div>
                    </div>
                    <div className='col-md-6' >
                        <div className='card h-100'>
                            <div className='card-header' style={{backgroundColor: '#081d2f'}}>
                                <div className='card-title' style={{textAlign:'center'}}>
                                    <h5 style={{color:"white"}}>Back End Technologies</h5>
                                </div>
                            </div>
                            <div className='card-body' >
                                    <ul style={{listStyle:'none', textAlign:'center', fontSize:'1.5rem'}}  >
                                        <li><FontAwesomeIcon icon={faNodeJs} /><span>NodeJs</span></li>
                                        <li><SiExpress/> Express</li>
                                        <li><BiLogoMongodb/>MongoDB</li>
                                        <li><TbBrandMysql/>MySQL</li>
                                    </ul>

                                </div>
                            </div>

                        </div>


                    </div>
                   
                </div>
            </div>
        

    );
}

export default Skills;