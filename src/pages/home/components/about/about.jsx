import { Component } from 'react'
import { Row, Col } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

import WhatWeOfferCard from './components/what-we-offer-card/what-we-offer-card'
import Title from '../../../../components/title/title'

import projecticon from '../../../../assets/icons/what-we-offer/projects.svg'
import presentationicon from '../../../../assets/icons/what-we-offer/presentations.svg'
import speakersicon from '../../../../assets/icons/what-we-offer/speakers.svg'

class About extends Component {
    render() {
        return (
            <>
                <Title title='What we offer?' subtitle='Our club' mb='3.5rem' />
                <Row className='justify-content-around'>
                    <Col className='mb-5' lg={3}>
                        <ScrollAnimation animateIn='slideInLeft' animateOnce>
                            <WhatWeOfferCard
                                icon={projecticon}
                                title="Real World Projects"
                                content="Build practical real world projects such as games."
                            />
                        </ScrollAnimation>
                    </Col>
                    <Col className='mb-5' lg={3}>
                        <ScrollAnimation animateIn='slideInLeft' animateOnce>
                            <WhatWeOfferCard
                                icon={presentationicon}
                                title="Coding Presentations"
                                content="Learn about Computer Science University programs and real world theory of programming projects."
                            />
                        </ScrollAnimation>
                    </Col>
                    <Col className='mb-5' lg={3}>
                        <ScrollAnimation animateIn='slideInLeft' animateOnce>
                            <WhatWeOfferCard
                                icon={speakersicon}
                                title="Comp Sci Speakers"
                                content="Talk to professional programmers about their field and experiences."
                            />
                        </ScrollAnimation>
                    </Col>
                </Row>
            </>
        )
    }
}

export default About