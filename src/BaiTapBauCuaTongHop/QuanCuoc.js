import React from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
export default function QuanCuoc(props) {
    const { quanCuoc } = props;
    const dispatch = useDispatch();
    const datTienCuoc = (quanCuoc, tangGiam) => {
        dispatch({
            type: 'DAT_CUOC',
            quanCuoc,
            tangGiam,
        });
    };
    const [ propsUsesSpring, setAnim, stop ] = useSpring(() => {
        return {
            to: { scale: 1 },
            from: { scale: 0 },
            reset: true

        };

    });
    const [ propsUsesSpring2, setAnim2, stop2 ] = useSpring(() => {
        return {
            to: { scale: 1 },
            from: { scale: 0 },
            reset: true

        };

    });

    return (
        <div className='mt-5' style={{ width: 200 }}>
            <img src={quanCuoc.img} alt='123' style={{ width: '100%' }} />
            <div className='bg-success mt-2 d-flex align-items-center justify-content-around' style={{ borderRadius: '15px' }}>
                <animated.button style={{ transform: propsUsesSpring.scale.interpolate(scale => `scale(${scale})`) }} className='btn btn-danger' onClick={() => {
                    setAnim({
                        to: { scale: 1 },
                        from: { scale: 0.5 },
                    });

                    datTienCuoc(quanCuoc, true);
                }}>+</animated.button>
                <span className='m-2' style={{ color: 'yellow', fontSize: 25 }}>{quanCuoc.diemCuoc}</span>
                <animated.button className='btn btn-danger' style={{ transform: propsUsesSpring2.scale.interpolate(scale => `scale(${scale})`) }} onClick={() => {
                    setAnim2({
                        to: { scale: 1 },
                        from: { scale: 0.5 },
                    });
                    datTienCuoc(quanCuoc, false);
                }}>-</animated.button>
            </div>
        </div>
    );
}
