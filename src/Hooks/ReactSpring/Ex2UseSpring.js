import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Ex2UseSpring() {
    let propsUseSpring = useSpring({
        color: [ 131, 111, 255 ],

        from: {
            color: [ 232, 121, 128 ]
        },
        config: { duration: 2000, delay: 0 }
    });

    return (
        <animated.div style={{
            color: propsUseSpring.color.interpolate((r, g, b) => { return `rgb(${r},${g},${b})`; })
        }}>
            Hello my friend
        </animated.div>
    );
}
