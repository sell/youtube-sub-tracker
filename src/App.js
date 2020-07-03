import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Footer } from './components';
import { Home, Error, Search, Contact, Stats, Instagram } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css';
import './switcher.scss';
import { TiSocialGithub, TiContacts } from "react-icons/ti"
import { FaSearchengin } from 'react-icons/fa'

function App(props) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('theme-color');
        if (currentThemeColor === 'theme-dark') {
            setIsDark(true)
        } else {
            setIsDark(false)
        }
    }, [])
    const handleLabelClick = () => {
        if (isDark) {
            localStorage.setItem('theme-color', 'theme-light');
            setIsDark(false)
        } else {
            localStorage.setItem('theme-color', 'theme-dark')
            setIsDark(true)
        }
    }
    return (
        <Router>
            <div className={`App ${isDark ? 'theme-dark' : ''}`}>
                <header>
                    <Navbar
                    fixed="top"
                    className="navBar"
                    collapseOnSelect
                    expand="lg"
                    bg="dark"
                    variant="dark"
                    >
                        <div className="container">
                            <Link className="navbar-brand" to="/">
                                Youtube Sub Count
                            </Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link className="nav-link borderBottomWhite" to="/search">
                                        Search <FaSearchengin />
                                    </Link>
                                    <Link className="nav-link borderBottomWhite" to="/t/github">
                                        Github <TiSocialGithub />
                                    </Link>
                                    <Link className="nav-link borderBottomWhite" to="/t/contact">
                                        Contact <TiContacts />
                                    </Link>
                                    <div className="nav-link">
                                        <div className='theme-switcher-wrap'>
                                            <label className={`theme-switcher-label ${isDark ? 'active'  : ''}`}
                                                onClick={handleLabelClick}
                                            >
                                                <div className='switch-path'>
                                                    <div className='switch-handle'>

                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </Nav>
                                <Nav>
                                    
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </header>
                <main className='mt-5'>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/search" component={Search} />
                        <Route path="/instagram" component={Instagram} />
                        <Route path="/t/contact" component={Contact} />
                        <Route path="/t/w/stats" component={Stats} />
                        <Route component={Error} />
                    </Switch>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
        
    )
}

export default App;