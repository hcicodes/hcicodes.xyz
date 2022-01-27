import { Row, Col, Image } from "react-bootstrap";

import Button from '../../../../components/button/button';

import './landing.scss'

import landingcomputer from '../../../../assets/landing/landing-computer.svg'
import pinkcircle from '../../../../assets/decorations/pink-circle.svg'

export default function Landing() {
    return (
        <>
            <Image className="circle-1" src={pinkcircle} />
            <Image className="circle-2" src={pinkcircle} />
            <Row className='justify-content-around'>
                <Col lg={5} className='intro-text'>
                    <h1 className="landing-title">
                        Humberside Collegiate Institute's Coding<br></br>
                        Club
                    </h1>
                    <div className='mt-3'>
                        <p className="text-muted">
                            Learn the art of computer programming through hands on projects and workshops at HCI Codes!
                        </p>
                    </div>
                    <div className='mt-4'>
                        <Button
                            target='_blank' rel='noreferrer'
                            to={{ pathname: 'https://classroom.google.com/c/Mzg5ODQzNzAyMTcy?cjc=swmjvs5' }}
                            className='px-4'
                        >
                            JOIN NOW
                        </Button>
                    </div>
                </Col>
                <Col lg={5}>
                    <Image width='90%' src={landingcomputer} fluid />
                </Col>
            </Row>
        </>
    )
}
