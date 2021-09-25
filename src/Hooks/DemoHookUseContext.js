import React, { useContext } from 'react';
import { context } from './ContextProvider';
export default function DemoHookUseContext(props) {


    let { cartReducer } = useContext(context);

    let [ cart, dispatch ] = cartReducer;
    return (
        <div>
            123
        </div>
    );
}
