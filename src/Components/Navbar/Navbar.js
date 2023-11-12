import React from 'react';
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Navbar(props) {
    return (
       
            <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-static-top">
                <div className='container mt-2'>
                    <h3 className=' text-decoration-none '>Selvakumar K </h3>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                     
                        <ul className="navbar-nav mx-4 ml-auto ">
                            <li className="nav-item active mx-3">
                            <AnchorLink href='#home'
                                    className="nav-link  " ><span>Home</span> <span className="sr-only">(current)</span>
                                </AnchorLink>
                            </li>

                            <li className="nav-item mx-3">
                              
                                <AnchorLink href='#about'
                                className="nav-link " ><span>About</span>
                                </AnchorLink>
                            </li>
                            <li className="nav-item mx-3">
                            <AnchorLink href='#skills'
                                className="nav-link " ><span>Skills</span>
                                </AnchorLink>
                            </li>
                            <li className="nav-item mx-3">
                            <AnchorLink href='#projects'
                                className="nav-link " ><span>Projects</span>
                                </AnchorLink>
                            </li>

                            <li className="nav-item mx-3">
                            <AnchorLink href='#contact'
                                className="nav-link " ><span>Contact</span>
                                </AnchorLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        
    );
}

export default Navbar;