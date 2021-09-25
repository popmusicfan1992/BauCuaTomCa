import React, { useRef, useState } from 'react';

export default function DemoHookUseRef(props) {
    let inputUserName = useRef(null);
    let inputPassWord = useRef(null);
    let [ userLogin, setUserLogin ] = useState();

    const handleLogin = () => {
        console.log(inputUserName.current.name);
    };


    return (
        <div className='container'>
            <h3>Login</h3>
            <div className='form-group'>
                <h3>UserName</h3>
                <input ref={inputUserName} name="userName" classname="form-control" />
            </div>
            <div className='form-group'>
                <h3>Password</h3>
                <input ref={inputPassWord} name="passWord" classname="form-control" />
            </div>
            <div className='form-group'>
                <button className='btn btn-success' onClick={() => { handleLogin(); }}>Login</button>
            </div>

        </div>
    );
}
