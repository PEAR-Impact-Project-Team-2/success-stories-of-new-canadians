import React from 'react';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export default function HideOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        threshold: 50,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}