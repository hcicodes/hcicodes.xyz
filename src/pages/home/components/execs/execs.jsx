import { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import ExecCard from './components/execs-card/execs-card'
import Title from '../../../../components/title/title'

import './execs.scss'

import devon from '../../../../assets/execs/devon.jpg'
import christian from '../../../../assets/execs/christian.jpg'

class Execs extends Component {
    render() {
        return (
            <>
                <Title title='Executives' subtitle='Meet the team!' />
                <Row className='justify-content-around'>
                    <Col className='mb-4' lg={3}>
                            <ExecCard
                                img={christian}
                                role='President'
                                name='Christian Stefaniw'
                                content='Christian is a senior at HCI. He is very interested in computer programming. Christian hopes to achieve a computer science degree from McGill.'
                            />
                    </Col>
                    <Col className='mb-4' lg={3}>
                            <ExecCard
                                img={devon}
                                role='Vice President'
                                name='Devon Otto'
                                content='Devon is a sophmore at HCI. He loves to program 3d with the Unity game engine.'
                            />
                    </Col>
                </Row>

            </>
        );
    }
}

export default Execs