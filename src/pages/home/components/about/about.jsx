import { Row, Col } from "react-bootstrap";

import WhatWeOfferCard from './components/what-we-offer-card/what-we-offer-card'
import Title from '../../../../components/title/title'

import projecticon from '../../../../assets/icons/what-we-offer/projects.svg'
import presentationicon from '../../../../assets/icons/what-we-offer/presentations.svg'
import speakersicon from '../../../../assets/icons/what-we-offer/speakers.svg'

export default function About() {
    return (
        <>
            <Title title='What we offer?' subtitle='Our club' mb='1.8rem' />
            <Row className='justify-content-around'>
                <Col className='mb-5' md={3}>
                    <WhatWeOfferCard
                        icon={projecticon}
                        title="Real World Projects"
                        content="Build practical real world projects such as games."
                    />
                </Col>
                <Col className='mb-5' md={3}>
                    <WhatWeOfferCard
                        icon={presentationicon}
                        title="Coding Workshops"
                        content={["Due to our partnership with ", <a target="_blank" rel="noreferrer" href='https://www.hackclub.com'><span className='text-danger'>Hack Club</span></a>, " we are able to offer productive coding workshops at our meetings."]}
                    />
                </Col>
                <Col className='mb-5' md={3}>
                    <WhatWeOfferCard
                        icon={speakersicon}
                        title="Comp Sci Speakers"
                        content="Talk to professional programmers about their field and experiences."
                    />
                </Col>
            </Row>
        </>
    )
}