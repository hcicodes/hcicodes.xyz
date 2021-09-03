import { Component } from 'react'
import { Image } from 'react-bootstrap'

import './what-we-offer-card.scss'

class WhatWeOfferCard extends Component {
    render() {
        return (
            <div className='what-we-offer-card'>
                <Image src={this.props.icon} alt="icon" />
                <h5 className='mt-1 mb-3'>{this.props.title}</h5>
                <p className='text-muted'>{this.props.content}</p>
            </div>
        )
    }
}

export default WhatWeOfferCard