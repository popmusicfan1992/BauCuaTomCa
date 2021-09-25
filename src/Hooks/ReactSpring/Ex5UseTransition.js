import React, { useState } from 'react';
import { useSpring, animated, useSprings, useTransition } from 'react-spring';

export default function Ex5UseTransition() {
    let [ arrItem, setArrayItem ] = useState([
        { id: 1, title: 'FrontEndOnline', content: 'cyberlearn' },
        { id: 2, title: 'FrontEndOffline', content: 'cybersoft' },
        { id: 3, title: 'FrontEndTuXa', content: 'cybersoft' }
    ]);
    const propsUseTransition = useTransition(arrItem, {
        from: { transform: 'translate3d(0,-40px,0)' }, //Component từ vị trí trước khi render
        enter: { transform: 'translate3d(0,0px,0)' }, //Component tại thời điểm render
        leave: { transform: 'translate3d(0,-40px,0)' },//Component tại thời điểm khi mất giao diện
        config: { duration: 2000 }
    });


    let renderItem = () => {

        return propsUseTransition((propsAnim, item) => {
            console.log('propAnim', propsAnim);
            console.log('item', item);
            return <animated.div style={propsAnim} className='bg-dark text-white' key={propsAnim.key}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
            </animated.div>;
        });


    };
    return (
        <div className='container'>
            {renderItem()}
        </div>
    );
}
