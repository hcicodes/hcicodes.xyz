import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import SocialBtn from './components/social-btn/social-btn'

export default function Footer() {
    return (
        <div className='py-5 mt-5' style={{ backgroundColor: '#F5F5F5' }}>
            <Container className='text-muted text-center'>
                <Row className='justify-content-center my-4'>
                    <Col xs={2}>
                        <SocialBtn href='https://www.instagram.com/hci.codes/' className='fa-2x fab fa-instagram' />
                    </Col>
                    <Col xs={2}>
                        <SocialBtn href='https://github.com/hcicodes' className='fa-2x fab fa-github' />
                    </Col>
                    <Col xs={2}>
                        <SocialBtn href='https://classroom.google.com/c/Mzg5ODQzNzAyMTcy?cjc=swmjvs5' className='fa-2x fab fa-google' />
                    </Col>
                </Row>
                <p>© Humerside CI Coding Club. All rights reserved</p>
            </Container>
        </div>
    )
}