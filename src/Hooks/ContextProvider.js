import React, { useReducer } from 'react';

const initialCart = [
    { id: 1, name: 'iphone', price: 1000, quantity: 1 }
];

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addtocart':
            let cartUpdate = [ ...state ];
            let index = cartUpdate.findIndex(item => item.id === action.item.id);
            if (index !== -1) {
                cartUpdate[ index ].quantity += 1;
            } else {
                const itemcart = { ...action.item, quantity: 1 };
                cartUpdate.push(itemcart);
            }
            return cartUpdate;
            break;


    }
    return [ ...state ];
};
export const context = React.createContext();
export default function ContextProvider(props) {
    let [ cart, dispatch ] = useReducer(cartReducer, initialCart);

    const store = {
        cartReducer: [ cart, dispatch ]
    };

    return (

        //dùng context provider để bao bọc component bên trong (cụ thể là props)
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    );
}
