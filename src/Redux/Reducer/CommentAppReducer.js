const initialState = {
    comments: [
        { name: 'Zed', content: 'Hi ! Zed', avatar: `https://i.pravatar.cc/150?u=zed` }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'add_comment': {
            let comments = [ ...state.comments, action.comment ];
            state.comments = comments;
            return { ...state };
        }

        default:
            return state;
    }
};
