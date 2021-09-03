import { Component } from 'react'

class Title extends Component {
    render() {
        return (
            <div className='w-100 text-center' style={{ marginBottom: `${this.props.mb ? this.props.mb : '2rem'}` }}>
                <p className='text-secondary mb-0'>{this.props.subtitle}</p>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default Title