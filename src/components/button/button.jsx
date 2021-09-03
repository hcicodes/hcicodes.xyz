import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './button.scss'

class Button extends React.Component {
    render() {
        const { isButton, primary, secondary, className, ...props } = this.props;
        const button_classes = this.props.secondary ? `button mat-btn bg-secondary ${className}` : `button mat-btn bg-primary ${className}`
        return (
            <>
                {
                    isButton
                        ?
                        <button className={button_classes} {...props}>
                            {this.props.children}
                        </button>
                        :
                        <Link smooth className={button_classes} {...props}>
                            {this.props.children}
                        </Link>
                }

            </>

        )
    }
}

export default Button;