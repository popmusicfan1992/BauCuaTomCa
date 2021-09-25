import React, { memo } from 'react';

function ChildHookUseCallBack(props) {
    console.log('render child');
    return (
        <div>
            <textarea></textarea>
            <br />
            <button className='btn btn-success'>Gửi</button>
        </div>
    );
}
export default memo(ChildHookUseCallBack);
