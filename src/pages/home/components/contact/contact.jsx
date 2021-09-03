import React from 'react'
import { Row, Col, Image, Form } from "react-bootstrap";
import ReCaptcha from 'react-google-recaptcha'

import Title from '../../../../components/title/title'
import Loader from '../../../../components/loader/loader'
import Button from '../../../../components/button/button'
import { email } from '../../../../services/contact/api';

import './contact.scss'

import messageimg from '../../../../assets/decorations/message.svg'

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            from_email: '',
            message: '',
            loading: false,
            email_sent: false,
            errors: {},
        }
        this.recaptcha_ref = React.createRef();
    }

    start_loading = () => {
        this.setState({
            loading: true
        })
    }

    stop_loading = () => {
        this.setState({
            loading: false
        })
    }

    reset_state = () => {
        this.setState({
            email_sent: false,
            errors: {},
        })
    }

    handle_change = (evt) => {
        const { value, name } = evt.target
        this.setState({
            [name]: value,
        })
    }

    handle_submit = async (evt) => {
        evt.preventDefault();
        this.reset_state();
        this.start_loading();
        await this.send_email();
        this.reset_recaptcha();
        this.stop_loading();
    }

    send_email = async () => {
        const { name, from_email, message } = this.state;
        const result = await email(name, from_email, message, this.recaptcha_ref.current.getValue());
        if (result.error)
            this.handle_email_error(result.error);
        else
            this.setState({
                email_sent: true
            })

    }

    handle_email_error = (error_response) => {
        if (this.error_response_has_more_info(error_response))
            this.setState({
                errors: error_response.data['errors'],
            })
        else
            this.setState({
                errors: { error: 'failed to send email' },
            })
    }

    error_response_has_more_info = (error_response) => {
        return error_response.status === 400 && error_response.data['errors']
    }

    reset_recaptcha = () => {
        window.grecaptcha.reset();
    }

    render() {
        const { email_sent, loading, errors, name, from_email, message } = this.state;
        return (
            <>
                <Loader show={loading} variant='secondary' />

                <Title title='Contact us!' subtitle='Have a question?' />
                <Row className='justify-content-around'>
                    <Col lg={4} className='mb-4'>
                        <div className='inner-shadow rounded-circle overflow-hidden'>
                            <Image className='mb-4 fade-in-out' src={messageimg} fluid />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <form onSubmit={this.handle_submit} action='' className='mb-5 contact-form'>
                            <Form.Group>
                                <Form.Control
                                    type='text' onChange={this.handle_change}
                                    value={name}
                                    placeholder='Name' name='name'
                                    className='contact-input' required
                                />
                                <span className='text-danger'>{errors['name']}</span>
                            </Form.Group>

                            <Form.Group className='my-4'>
                                <Form.Control
                                    onChange={this.handle_change} placeholder='Email'
                                    value={from_email}
                                    name='from_email' type='email'
                                    className='contact-input' required
                                />
                                <span className='text-danger'>{errors['email']}</span>
                            </Form.Group>

                            <div className='mb-4'>
                                <Form.Group>
                                    <Form.Control
                                        onChange={this.handle_change} placeholder='Message'
                                        name='message' as='textarea'
                                        value={message}
                                        className='contact-input' required
                                    />
                                </Form.Group>
                            </div>

                            <div className='mb-4'>
                                <div className='d-flex justify-content-center'>
                                    <ReCaptcha
                                        sitekey='6LfbQUAcAAAAAO8B3IFqf4_4i-BxhS2Ti4pBSG2q'
                                        ref={this.recaptcha_ref}
                                    />
                                </div>
                                <p className='text-danger text-center'>{errors['recaptcha']}</p>
                            </div>

                            <Button isButton={true} primary={true} className='w-100 outer-shadow'>Send</Button>
                            <p className='text-danger text-center'>{errors['error']}</p>
                            <div className='mt-2'>
                                {email_sent ? <p className='text-success text-center'>Sent!</p> : <></>}
                            </div>
                        </form>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Contact