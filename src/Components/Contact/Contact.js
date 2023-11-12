import React from 'react';
import './Contact.css'
import { FaEnvelope, FaPhone} from "react-icons/fa";

function Contact(props) {
    return (
        
            <div id='contact' className='mt-3'>
            <div className='container'>
            <h2  style={{color:'white'}}>Contact Me</h2 >
                <div className='row mt-3'>
                       <div className='col-md-12'>
                          <div className='card h-100' >
                            <div className='d-flex flex-column justify-content-center align-items-center' style={{fontSize:'1.1rem'}}>
                                     <div>
                                        <FaPhone  className='pr-1' />:<span  className='p-2'>+91-6381502935</span>
                                     </div>
                                     <div>
                                        <FaEnvelope className='pr-1'/>:<span  className='p-2'>selva81222@gmail.com</span>
                                     </div>
                            </div>
                                     
                          </div>
                       </div>
                       <div className='col-md-6'>

                       </div>
                </div>
                

            </div>
            
        </div>
    );
}

export default Contact;
