import React, { useEffect, useState } from 'react';

export default function ChildHookUseEffect() {
    let [ number, setNumber ] = useState(1);
    //Thay thế cho will unmount có nghĩa là nó sẽ chạy khi component này mất
    useEffect(() => {

        return () => {
            console.log('will unmount');
        };
    }, [ number ]);
    return (
        <div>
            <h3>Hello</h3>
        </div>
    );
}
