import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import XucXac from './XucXac';

export default function DanhSachXucXac() {
    
    const danhSachXucXac = useSelector(state => state.GameBauCuaReducer.danhSachXucXac);
    const dispatch = useDispatch();

    
    return (
        <div className='mt-5'>
            <div className='text-center mb-3'>
                <button className='btn btn-success' onClick={() => {
                    dispatch({
                        type: 'XOC'
                    });
                }} style={{ fontSize: 25 }}>Xốc</button>

            </div>
            <div className='bg-white  m-auto' style={{ width: 400, height: 400, borderRadius: '50%' }}>

                <div className='row' style={{ marginRight: 75 }}>
                    <div className='col-12 text-center'  >
                        <XucXac xucXac={danhSachXucXac[ 0 ]} />
                    </div>
                    <div className='col-6 text-center '>
                        <XucXac xucXac={danhSachXucXac[ 1 ]} />
                    </div>
                    <div className='col-6 text-center '>
                        <XucXac xucXac={danhSachXucXac[ 2 ]} />
                    </div>

                </div>
            </div>


        </div>
    );
}
