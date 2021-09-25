import React, { useMemo, useState } from 'react';
import ChildHookUseMemo from './ChildHookUseMemo';

export default function DemoHookUseMemo(props) {
    let [ like, setLike ] = useState(1);
    let cart = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'htc iphone', price: 2000 },
        { id: 3, name: 'lg iphone', price: 3000 },
    ];
    const cartMemo = useMemo(() => cart, []);

    return (
        <div>
            Like : {like} <i className='fa fa-heart text-danger'></i>
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 25 }} onClick={() => {
                setLike(like += 1);
            }}><i className='fa fa-heart text-danger'></i></span>

            <br />
            <br />
            <ChildHookUseMemo cart={cartMemo} />
        </div>
    );
}
