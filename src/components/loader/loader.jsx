import React from 'react'
import { Spinner, Modal } from "react-bootstrap";

import './loader.scss'

export default function Loader(props) {
    return (
        <Modal onHide={() => { }} centered contentClassName='loading-modal' show={props.show}>
            <Spinner className='m-auto' variant={props.variant ? props.variant : 'primary'} animation="border" />
        </Modal>
    );
}