import React from 'react'

const Nav = () => {
    // const [active,setActive]=useState('');

    return (
        <div>
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid right">
                    <a className="navbar-brand" href="/">CRUD</a>
                        <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link text-danger" aria-current="page" href="/insert">Insert</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-danger" aria-current="page" href="/update">Update</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-danger" aria-current="page" href="/delete">Delete</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-danger" aria-current="page" href="/view">ViewAll</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-danger" aria-current="page" href="/find">FindOne</a>
                                </li>
                              
                            </ul>
                    <div className="dis">

                    <button className="navbar-toggler bt" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-dark" id="offcanvasNavbarLabel">CRUD</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                            <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/insert">Insert</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/update">Update</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/delete">Delete</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/view">ViewAll</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/find">FindOne</a>
                            </li>
                            </ul>
                            </div>
                        </div>
                        <div className="offcanvas-body">
                
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav