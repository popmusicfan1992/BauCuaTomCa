import React, { Fragment, memo } from 'react';
import { useSpring, animated } from 'react-spring';
function XucXac(props) {
    const { xucXac } = props;
    const [ animated360, setAnim, stop ] = useSpring(() => ({

        to: {
            xyz: [ 360, 360, 360 ]
        },
        from: {
            xyz: [ 0, 0, 0 ]
        },
        config: { duration: 1000 },
        reset: true


    }));
    setAnim({
        to: {
            xyz: [ 360, 360, 360 ]
        },
        from: {
            xyz: [ 0, 0, 0 ]
        },

    });
    return (
        <Fragment>
            <div className='scene mx-auto' >
                <animated.div className='cube ' style={{ transform: animated360.xyz.interpolate((x, y, z) => `translateZ(-25px) rotate(${x}deg) rotate(${y}deg) rotate(${z}deg)`) }}>
                    <div className='cube__face front'>
                        <img src={xucXac.img} alt='123' style={{ width: '100%' }} />
                    </div>
                    <div className='cube__face right'>
                        <img src='./img/BaiTapGameBauCua/cua.png' alt='123' style={{ width: '100%' }} />
                    </div>
                    <div className='cube__face back'>
                        <img src='./img/BaiTapGameBauCua/tom.png' alt='123' style={{ width: '100%' }} />
                    </div>
                    <div className='cube__face left' >
                        <img src='./img/BaiTapGameBauCua/ca.png' alt='123' style={{ width: '100%' }} />
                    </div>
                    <div className='cube__face top'>
                        <img src='./img/BaiTapGameBauCua/nai.png' alt='123' style={{ width: '100%' }} />
                    </div>
                    <div className='cube__face bottom'>
                        <img src='./img/BaiTapGameBauCua/ga.png' alt='123' style={{ width: '100%' }} />
                    </div>







                </animated.div>

            </div>
        </Fragment>
    );
}
export default memo(XucXac);