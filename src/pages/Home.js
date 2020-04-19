import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Home = () => {
    return (
        <Container>
            <Row style={{maxWidth: 900, margin: 'auto', paddingTop: 50, paddingBottom: 50}}>
                <Col>
                    <h1>In Touch</h1>
                    <p style={{fontSize: '25px'}}>A responsive, scalable, and configurable service that allows the vulnerable eldery to get in touch with volunteers</p>
                    <Button variant="outline-primary" href="/getting-started" style={{width: 150, padding: 5, marginRight: 10}}>Get Started</Button><Button variant="outline-secondary" style={{width: 150, padding: 5}} href="/flutter">Flutter</Button>
                </Col>
            </Row>
            <Row>
                <Col sm={4} xs={12} >
                    <p style={{fontSize: '28px'}}>Built with Twilio</p>
                    <p>Project is built using Twilio making the setup and customisation easy.</p>
                </Col>
                <Col sm={4} xs={12} >
                    <p style={{fontSize: '28px'}}>Built with Firebase</p>
                    <p>Project uses firebase authentication and firestore. This give us support for multiple platforms and makes adding new features easy. Firebase authentication SDK adds the feature of Google and Facebook Login </p>
                </Col>
                <Col sm={4} xs={12} >
                    <p style={{fontSize: '28px'}}>Skillsme Hackathon</p>
                    <p>This project is made for a Skillsme hackathon with the mentality to help people during the covid 19 epidemic.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Home