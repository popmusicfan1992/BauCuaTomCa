import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
export default function DemoReduxApp(props) {
    let comments = useSelector(state => state.CommentAppReducer.comments);

    let [ userComment, setUserComment ] = useState({
        name: '',
        content: '',
        avatar: '',
    });
    let dispatch = useDispatch();
    // console.log(userComment);
    const handleChange = (e) => {
        let { value, name } = e.target;

        //bên hook thì phải clone lại userComment
        setUserComment({
            ...userComment, [ name ]: value
        });
    };

    const handleSend = (e) => {
        e.preventDefault();

        let comment = { ...userComment, avatar: `https://i.pravatar.cc/150?u=${userComment.name}` };
        dispatch({
            type: 'add_comment',
            comment
        });
    };
    return (
        <div className='container'>
            <h3>Comment !!</h3>
            <div className="card text-left">
                <div className='card-header'>
                    {
                        comments.map((comment, index) => {
                            return <div className='row' key={index}>
                                <div className='col-1'>
                                    <img src={comment.avatar} alt='123' className='img-fluid' style={{ height: 70 }} />
                                </div>
                                <div className='col-11'>
                                    <h6 className='text-danger'>{comment.name}</h6>
                                    <p>{comment.content}</p>
                                </div>

                            </div>;
                        })
                    }

                </div>

                <div className="card-body">
                    <div className='form-group'>
                        <h4 className='card-title'>Name</h4>
                        <input type="text" name="name" classname="form-control" onChange={handleChange} />

                    </div>
                    <div className='form-group'>
                        <h4 className='card-title'>Content</h4>
                        <input type="text" name="content" classname="form-control" onChange={handleChange} />

                    </div>
                    <button className='btn btn-success' onClick={handleSend}>Send</button>
                </div>
            </div>


        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         comments: state.CommentAppReducer.comments
//     };
// };
// export default connect(mapStateToProps)(DemoReduxApp);