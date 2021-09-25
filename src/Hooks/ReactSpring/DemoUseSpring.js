import React, { version } from 'react';
import { useSpring, animated } from 'react-spring';

export default function DemoUseSpring(props) {
    const styledAnimated = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const animatednumber = useSpring({ number: 200, color: 'red', from: { number: 1, color: "black" }, config: { duration: 3000 } });

    return (
        <div>
            <animated.div style={styledAnimated}>I will fade in</animated.div>
            <animated.div >{animatednumber.number}</animated.div>
            <animated.p style={{ fontSize: animatednumber.number, color: animatednumber.color }}>1</animated.p>
        </div>
    );


}
