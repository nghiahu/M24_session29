import React, { useState } from 'react';

export default function B2() {
    const [dataIpn, setData] = useState<string>("");
    const getdata = () => {
        const data = document.getElementById('data') as HTMLInputElement;
        if (data) {
            setData(data.value);
        }
    }

    return (
        <div>Bài tập 2 <br />
            <input onInput={getdata} type="text" id="data"placeholder='Nhập dữ liệu'/>
            <div>Dữ liệu người dùng nhập:  {dataIpn}</div>
        </div>
    );
}

