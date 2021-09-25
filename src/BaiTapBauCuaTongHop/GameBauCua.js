import React, { useMemo } from 'react';
import DanhSachQuanCuoc from './DanhSachQuanCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import './BaiTapGameBauCua.css';
import { useSelector } from 'react-redux';


export default function GameBauCua(props) {

    const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem);


    return (
        <div className='container-fluid' id='BaiTapGameBauCua'>
            <div className='text-center'>
                <div className='text-primary display-4'>
                    BẦU CUA TÔM CÁ

                </div>
                <div className='mt-3'>
                    <span className='p-3 text-white bg-danger'>Tiền Thưởng: <span className='text-warning'>
                        {tongDiem.toLocaleString()}$</span></span>
                </div>
                <div className='mt-5'>
                    {
                        tongDiem == 0 ? <button className='btn btn-success' onClick={() => {
                            window.location.reload();

                        }}>Chơi lại</button> : ''
                    }


                </div>
            </div>
            <div className='row'>
                <div className='col-7'>
                    <DanhSachQuanCuoc />

                </div>
                <div className='col-5'>
                    <DanhSachXucXac />

                </div>
            </div>

        </div>
    );
}
