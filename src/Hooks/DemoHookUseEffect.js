import React, { useEffect, useState } from 'react';
import ChildHookUseEffect from './ChildHookUseEffect';

export default function DemoHookUseEffect() {
    let [ number, setNumber ] = useState(1);
    console.log('render');
    //useEffect la ham chay xong khi render thay cho didupdate didmount trong moi truong hop
    // useEffect(() => {
    //     console.log("did Mount");
    //     console.log("did Update");
    // });

    // cach viet thay cho componentdidmount (chỉ chạy lần đầu tiên khi render nhưng khi setstate thì không chạy lai);
    useEffect(() => {
        console.log('didmount');
    }, []);
    //Cách viết thay thế componentdidUpdate
    useEffect(() => {
        console.log('didupdate chạy khi number thay đổi');
    }, [ number ]);// state number thay đổi sau render thì use effect này sẽ chạy

    const handleIncrease = () => {
        setNumber(number += 1);
    };
    return (

        <div  >
            <div className="card text-left" style={{ width: 250, height: 350 }}>
                <img className="card-img-top" src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/241559990_6431494570209156_6398177165052764845_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=dbeb18&_nc_ohc=QyFl4mTa0owAX8LgC64&_nc_ht=scontent.fdad1-2.fna&oh=5ed1058e03e7242bcd8d4b85755bff64&oe=61661347" alt='123' />
                <div className="card-body">
                    <h4 className="card-title">HG</h4>
                    <p className="card-text text-danger">{number} <i className='fa fa-heart'></i> </p>
                    <button className='btn btn-danger' onClick={handleIncrease}>Tim</button>
                </div>
                {number === 1 ? <ChildHookUseEffect /> : ''}
            </div>

        </div >
    );
}
