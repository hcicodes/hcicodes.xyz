import { Component } from 'react'
import { Image } from 'react-bootstrap'

class ExecCard extends Component {
    render() {
        return (
            <div className='exec-card'>
                <Image src={this.props.img} fluid />
                <div className='mt-3'>
                    <h5 className='text-muted'>{this.props.name}</h5>
                    <p className='text-muted'>{this.props.role}</p>
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default ExecCard