import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import github from '../images/github.png'
import { useLocation } from 'react-router-dom'

const Header = () => {
    let location = useLocation();
    return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">In Touch</Navbar.Brand>
        <Navbar.Collapse id="header">
        <Nav className="mr-auto" defaultActiveKey={typeof location === 'undefined'? null:location.pathname}>
            <Nav.Link href="/getting-started">Getting Started</Nav.Link>
            <Nav.Link href="/backend">Backend</Nav.Link>
            <Nav.Link href="/flutter">Flutter</Nav.Link>
        </Nav>
        <Nav.Link href="https://github.com"><img alt="Github" height={24} src={github}></img></Nav.Link>
        </Navbar.Collapse>
    </Navbar>)
}

export default Header