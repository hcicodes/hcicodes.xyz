import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

import SocialBtn from './components/social-btn/social-btn'

class Footer extends React.Component {
    render() {
        return (
            <div className='py-5 mt-5' style={{ backgroundColor: '#F5F5F5' }}>
                <Container className='text-muted text-center'>
                    <Row className='justify-content-center my-4'>
                        <Col xs={2}>
                            <ScrollAnimation animateIn='slideInLeft' animateOnce>
                                <SocialBtn href='https://www.instagram.com/hcicodes/' className='fa-2x fab fa-instagram' />
                            </ScrollAnimation>
                        </Col>
                        <Col xs={2}>
                            <ScrollAnimation animateIn='slideInUp' animateOnce>
                                <SocialBtn href='https://github.com/hcicodes' className='fa-2x fab fa-github' />
                            </ScrollAnimation>
                        </Col>
                        <Col xs={2}>
                            <ScrollAnimation animateIn='slideInRight' animateOnce>
                                <SocialBtn href='https://discord.gg/gJJaMQax5j' className='fa-2x fab fa-discord' />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <p>© Humerside CI Engineering Club. All rights reserved</p>
                </Container>
            </div>
        )
    }
}

export default Footer