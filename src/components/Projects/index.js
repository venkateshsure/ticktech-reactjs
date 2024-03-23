import './index.css'

const Projects=()=>{
    return (
        <div className='project-main-head-con'>
        <div className='project-head-con'>
            <div className='project-con'>
                <div className='fir-project-con'>
                    <h4>TODOS App</h4>
                    <a href="https://todos-reactjs-psi.vercel.app/" target="_blank" rel="noreferrer">Todos App</a>
                    </div>
                    <p className='para-project-con'>
                        <span className='tech'>Technologies used : HTML, CSS, React.js, Node.js</span>
                    <span className='span-project-con'>Here the application is build with Frontend and Backend.<br/>
                      The application with Backend code is integrated with the thirdy party app railway.app.<br/>
                      It provides the API for the application.
                    </span>
                    </p>
                </div>
                <div className='project-con'>
                <div className='fir-project-con'>
                    <h4>Nxt Trendz ( ECommerce Clone - Amazon,Flipkart)</h4>
                <a href="https://venkycart.ccbp.tech/" target="_blank" rel="noreferrer">Nxt Trendz</a>
                </div>
                    <p className='para-project-con'>
                    <span className='tech'>Technologies used : React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local
                        Storage, JWT Token, Authorization, Authentication</span>
                    <span className='span-project-con'>
                        Designed pages for Login, Products, and Product details with React
                        Router and React components.<br/>
                        Ensured user security through JWT tokens, REST API calls, and local
                        storage.
                    </span>
                    </p>
             </div>
             <div className='project-con'>
                <div className='fir-project-con'>
                    <h4>Jobby App</h4>
                <a href="https://venkyjobby.ccbp.tech/" target="_blank" rel="noreferrer">Jobby App</a>
                </div>
                <p className='para-project-con'>
                <span className='tech'> Technologies used : React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local
                    Storage, JWT Token, Authorization, Authentication</span>
                   <span className='span-project-con'>
                        Developed a comprehensive job search solution, Jobby App.<br/>
                         Designed pages for Login, Home, Jobs, and Job item details with React
                        components and form inputs.<br/>
                        Secured user data with JWT tokens, REST API calls, and local storage.
                         Implemented protected routes and persisted login state with React
                        Router and local storage.<br/>
                    </span>
                </p>
            </div>
        </div>
        </div>
    )
}

export default Projects