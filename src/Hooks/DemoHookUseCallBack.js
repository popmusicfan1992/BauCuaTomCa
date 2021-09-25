import React, { useState } from 'react';
import ChildHookUseCallBack from './ChildHookUseCallBack';

export default function DemoHookUseCallBack(props) {
    let [ like, setLike ] = useState(1);

    const renderNotify = () => {
        return `Bạn đã thả ${like} like!!`;
    };

    return (
        <div className='container'>
            Like : {like} <i className='fa fa-heart text-danger'></i>
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 25 }} onClick={() => {
                setLike(like += 1);
            }}><i className='fa fa-heart text-danger'></i></span>
            <small>{renderNotify()}</small>
            <br />
            <br />
            <ChildHookUseCallBack />
        </div>
    );
}
