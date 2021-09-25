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
let arrProduct = [
    { id: 1, name: 'iphone', price: 1000, quantity: 1 },
    { id: 2, name: 'Note xiaomi', price: 2000, quantity: 1 },
    { id: 3, name: 'Samsung', price: 3000, quantity: 1 }
];
export default function DemoHookUseReducer(props) {
    let [ cart, dispatch ] = useReducer(cartReducer, initialCart);
    const addToCart = (item) => {
        dispatch({
            type: 'addtocart',
            item
        });
    };
    return (
        <div className='container'>
            <div className='row'>
                {
                    arrProduct.map((item, index) => {
                        return <div className='col-4'>
                            <div className="card text-left">
                                <img className="card-img-top" src="https://www.didongmy.com/vnt_upload/news/11_2020/thiet-ke-iphone-13-ro-ri-didongmy.jpg" alt />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.price}</p>
                                    <button className='btn btn-success' onClick={() => {
                                        addToCart(item);
                                    }}>Add to cart</button>
                                </div>
                            </div>


                        </div>;

                    })
                }

            </div>
            <h3>Giỏ hàng</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>

                            </tr>;

                        })
                    }
                </tbody>
            </table>

        </div>
    );
}
