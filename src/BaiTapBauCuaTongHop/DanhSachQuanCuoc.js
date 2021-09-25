import React from 'react';
import QuanCuoc from './QuanCuoc';
import { useSelector } from 'react-redux';
export default function DanhSachQuanCuoc() {


    const danhsachCuoc = useSelector(state => state.GameBauCuaReducer.danhsachCuoc);
    const renderQuanCuoc = () => {
        return danhsachCuoc.map((quanCuoc, index) => {
            return <div className='col-4' key={index}>
                <QuanCuoc quanCuoc={quanCuoc} />

            </div>;
        });
    };
    return (
        <div className='row mt-3'>
            {renderQuanCuoc()}
        </div>
    );
}
