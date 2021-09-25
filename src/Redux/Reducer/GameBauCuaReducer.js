const initialState = {
    danhsachCuoc: [
        { ma: 'bau', img: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'cua', img: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'tom', img: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
        { ma: 'ca', img: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'nai', img: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'ga', img: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },

    ],
    tongDiem: 1000,
    danhSachXucXac: [
        { ma: 'bau', img: './img/BaiTapGameBauCua/DauHoi.jpg' },
        { ma: 'cua', img: './img/BaiTapGameBauCua/DauHoi.jpg' },
        { ma: 'tom', img: './img/BaiTapGameBauCua/DauHoi.jpg' },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {

            const danhSachUpdate = [ ...state.danhsachCuoc ];
            let index = danhSachUpdate.findIndex(item => item.ma === action.quanCuoc.ma);

            if (index !== -1) {
                if (action.tangGiam) {
                    if (state.tongDiem > 0) {
                        danhSachUpdate[ index ].diemCuoc += 100;
                        state.tongDiem -= 100;
                    }

                } else {
                    if (danhSachUpdate[ index ].diemCuoc <= 0) {
                        alert('Không thể đặt cược dưới 0');
                    } else {
                        danhSachUpdate[ index ].diemCuoc -= 100;
                        state.tongDiem += 100;
                    }
                }
            }
            return { ...state, danhsachCuoc: danhSachUpdate };

            break;
        }
        case 'XOC': {
            let mangXucXacUpdate = [];
            let danhSachXucXac = [ ...state.danhsachCuoc ];
            for (let i = 0; i < 3; i++) {
                const xucXac = danhSachXucXac[ Math.floor(Math.random() * 6) ];

                mangXucXacUpdate.push(xucXac);

            }
            mangXucXacUpdate.forEach((XucXac, index) => {
                let indexQuanCuoc = danhSachXucXac.findIndex(item => item.ma === XucXac.ma);
                if (indexQuanCuoc !== -1) {
                    state.tongDiem += danhSachXucXac[ indexQuanCuoc ].diemCuoc;
                }
            });
            danhSachXucXac.forEach((xucxac, index) => {
                let indexXX = mangXucXacUpdate.findIndex(item => item.ma === xucxac.ma);
                if (indexXX !== -1) {
                    state.tongDiem += xucxac.diemCuoc;

                }
            });

            danhSachXucXac.forEach((xucxac, index) => {
                xucxac.diemCuoc = 0;
            });



            return { ...state, danhSachXucXac: mangXucXacUpdate, danhsachCuoc: danhSachXucXac };
        }


        default:
            return state;
    }
};
