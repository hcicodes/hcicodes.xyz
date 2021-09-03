import { Image } from 'react-bootstrap'

import './what-we-offer-card.scss'


export default function WhatWeOfferCard(props) {
    return (
        <div className='what-we-offer-card'>
            <Image src={props.icon} alt="icon" />
            <h5 className='mt-1 mb-3'>{props.title}</h5>
            <p className='text-muted'>{props.content}</p>
        </div>
    )
}