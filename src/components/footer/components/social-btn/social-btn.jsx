import React from "react"

import './social-btn.scss';

export default function SocialBtn(props) {
    return (
        <a target='_blank' rel='noreferrer' href={props.href}>
            <div className="social-btn">
                <i className={props.className}></i>
            </div>
        </a>
    )
}