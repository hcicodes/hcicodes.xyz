import React from "react"

import './social-btn.scss';

class SocialBtn extends React.Component {
    render() {
        return (
            <a target='_blank' rel='noreferrer' href={this.props.href}>
                <div className="social-btn">
                    <i className={this.props.className}></i>
                </div>
            </a>
        )
    }
}

export default SocialBtn