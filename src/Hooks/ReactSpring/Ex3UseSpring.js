import React from 'react';
import { useSpring, animated, useSprings } from 'react-spring';
export default function Ex3UseSpring() {

    let arrOpacity = [
        { opacity: 0.1, color: 'red', content: 'hello dev' },
        { opacity: 0.8, color: 'green', content: 'hello c#' },
        { opacity: 0.5, color: 'blue', content: 'hello java' },
        { opacity: 0.6, color: 'purple', content: 'hello c++' },
        { opacity: 0.4, color: 'yellow', content: 'hello python' }
    ];
    let propsAnimetionUsesSpring = useSprings(arrOpacity.length, arrOpacity.map((item, index) => {
        return {
            to: { opacity: item.opacity, color: item.color, content: item.content },
            from: { opacity: 0, color: 'orange', content: item.content },
            config: { duration: 3000 }
        };
    }));
    return (
        <div>
            {propsAnimetionUsesSpring.map((itemAnim, index) => {
                return <animated.h1 style={itemAnim}>
                    {itemAnim.content}
                </animated.h1>;
            })}
        </div>
    );
}
