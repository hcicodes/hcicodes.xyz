import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './button.scss'

export default function Button(props) {
    const { isButton, primary, secondary, className, ...newProps } = props;
        const button_classes = secondary ? `button mat-btn bg-secondary ${className}` : `button mat-btn bg-primary ${className}`
        return (
            <>
                {
                    isButton
                        ?
                        <button className={button_classes} {...newProps}>
                            {props.children}
                        </button>
                        :
                        <Link smooth className={button_classes} {...newProps}>
                            {props.children}
                        </Link>
                }

            </>

        )
}