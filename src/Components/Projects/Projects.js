import React from 'react';



function Projects(props) {
    return (
        <div id='projects' className='mt-5'>
            <div className='container'>
            <h2  style={{color:'white'}}>Projects</h2 > 
                <div className='row mt-3 '>
                    <div className='col-md-6 my-3 '>
                    <div class="card h-100"  >
                            <img class="card-img-top" src='project1.PNG' height={"300px"} width={"300px"} alt="project1"/>
                                <div class="card-body">
                                    <h5 class="card-title">Rent House</h5>
                                    <p class="card-text" style={{color:'black'}}>This Rent House full stack application allow us to rent products in hourly basics. Both users and admin login is provided
                                    ,Users can able to add product to the cart and can check out the product with an intergrated razor pay payment system.
                                    Admin portal also provided to add products, edit products and als deleting the products.</p>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className='my-2'>
                                        <a href='https://rent-house-project.netlify.app/' target='blank'><button className='btn btn-warning'>Live</button></a>
                                    </div>
                                    <div className='my-2'>
                                    <a href='https://github.com/selvakumar-MERN/Rent-house-frontend.git' target='blank'><button className='btn btn-primary'>Font-end code</button></a>
                                    </div>
                                    <div className='my-2'>
                                    <a href='https://github.com/selvakumar-MERN/Rent-house-backend.git' target='blank'><button className='btn btn-primary'>Back-end code</button></a>
                                    </div>
                                    </div>
                                    
                                    
                                </div>
                        </div>

                    </div>
                    <div className='col-md-6 my-3 '>
                    <div class="card h-100 " >
                            <img class="card-img-top" src="project2.PNG" height={'300px'} width={"300px"} alt="project2"/>
                                <div class="card-body">
                                    <h5 class="card-title">Project Management Tool</h5>
                                    <p class="card-text" style={{color:'black'}}>This full stack application allow us to create projects and adding registered users as teams memebers,
                                    Assign regular task to team members and team members can submit the task for admin review, Seperate dashboard is provided to 
                                    display projects, ongoing projects,completed tasks, ongoing task, and task waiting for review.</p>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className='my-2'>
                                        <a href='https://buddy-chat-project.netlify.app/' target='blank'><button className='btn btn-warning'>Live</button></a>
                                    </div>
                                    <div className='my-2'>
                                    <a href='https://github.com/selvakumar-MERN/Buddy-chat-frontend.git' target='blank'><button className='btn btn-primary'>Font-end code</button></a>
                                    </div>
                                    <div className='my-2'>
                                    <a href='https://github.com/selvakumar-MERN/Project-Tool-Backend.git' target='blank'><button className='btn btn-primary'>Back-end code</button></a>
                                    </div>
                                    </div>
                                    
                                    
                                </div>
                        </div>

                    </div>

                </div>
                <div className='row mt-3'>
                    <div className='col-md-6 my-3'>
                    <div class="card h-100" >
                            <img class="card-img-top" src='project3.PNG' height={"300px"} width={"300px"} alt="project3"/>
                                <div class="card-body">
                                    <h5 class="card-title">Hotel Booking</h5>
                                    <p class="card-text" style={{color:'black'}}>This full stack application is used to book hotel tickets for ooty,
                                    user registeration and login authentication is provided, User can view hotel and the prices, and also can pay using 
                                    razor pay  </p>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className='my-2'>
                                        <a href='https://buddy-chat-project.netlify.app/' target='blank'><button className='btn btn-warning'>Live</button></a>
                                    </div>
                                    <div className='my-2'>
                                    <a href='https://github.com/selvakumar-MERN/Buddy-chat-frontend.git' target='blank'><button className='btn btn-primary'>Font-end code</button></a>
                                    </div>
                                    <div className='my-2'>
                                    <a href='https://github.com/selvakumar-MERN/Project-Tool-Backend.git' target='blank'><button className='btn btn-primary'>Back-end code</button></a>
                                    </div>
                                    </div>
                                    
                                    
                                </div>
                        </div>

                    </div>
                    <div className='col-md-6 my-3'>
                    <div class="card h-100 " >
                            <img class="card-img-top" src="project4.PNG" height={'300px'} width={"300px"} alt="project4"/>
                                <div class="card-body">
                                    <h5 class="card-title">Buddy chat app</h5>
                                    <p class="card-text" style={{color:'black'}}>This full stack application allow us to chat between the registered users,
                                    user can also select an avatar from multiavatar api as profile picture, implemented with socket.io for end to end chat</p>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <div className='my-2'>
                                    <a href='https://buddy-chat-project.netlify.app/' target='blank'><button className='btn btn-warning'>Live</button></a>
                                    </div>
                                    <div className='my-2'>
                                    <a href='https://github.com/selvakumar-MERN/Buddy-chat-frontend.git' target='blank'><button className='btn btn-primary'>Font-end code</button></a>
                                    </div>
                                    <div className='my-2'>
                                    <a href='https://github.com/selvakumar-MERN/Buddy-chat-backend.git' target='blank'><button className='btn btn-primary'>Back-end code</button></a>
                                    </div>
                                    </div>
                                    
                                    
                                </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Projects;