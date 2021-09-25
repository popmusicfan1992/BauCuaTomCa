import React, { useState } from 'react';

export default function DemoHookUseState() {

    //(1)this.state = {like:0}
    //(2)this.setState(newState)
    //tuple
    let [ state, setState ] = useState({ like: 0 });
    const handleLike = () => {
        setState({
            like: state.like += 1
        });
    };
    return (
        <div className='container'>
            <div className="card text-left" style={{ width: 250, height: 350 }}>
                <img className="card-img-top" src="https://anh.24h.com.vn//upload/4-2016/images/2016-12-19/1482080502-14817757825228-thumbnail.jpg" alt='23' style={{ width: '100%' }} />
                <div className="card-body">
                    <h4 className="card-title">Picture</h4>
                    <p className="card-text text-danger">{state.like} <i className='fa fa-heart'></i></p>
                    <button className='btn btn-danger' onClick={handleLike}>Like</button>
                </div>
            </div>

        </div>
    );
}
