import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Resume from './Ajay_singh_Resume.pdf';


// import Popover from 'react-bootstrap/Popover';
// import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';

const Navbar = () => {
    // yeh saare use location iss liye use kiya ke agar suppose home page pe ho to wo active ho and agar about to about button chamak rha ho 
    let location = useLocation();
    // useEffect(()=>{
    //     console.log(location.pathname);
    // }, [location]);
    // const popover = (
    //     <Popover id="popover-basic">
    //         <Popover.Header as="h3">Ajay's Resume</Popover.Header>
    //         <Popover.Body>
    //             Your download will begin shortly :)
    //         </Popover.Body>
    //     </Popover>
    // );
    return (

        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Ajay singh</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`} to="/projects">Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex">

                        <a href={Resume} trigger="click"  placement="left" download="Ajay's Resume" target='_blank' rel="noreferrer">
                            <button type="button" class="btn btn-dark btn-lg btn-block">Download Resume</button>
                        </a>


                    </form>
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar
