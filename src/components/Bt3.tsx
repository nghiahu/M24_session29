import React, { useState } from 'react'

export default function Bt3() {
    const [dataIpn, setData] = useState<string>();
        const getdata = (event: React.ChangeEvent<HTMLInputElement>) => {
            setData(event.target.value);
          };
  return (
    <div>
        Bài tập 3
        <h3>Thời gian: {dataIpn}</h3>
        <p><input onChange={getdata} type="date" /></p>
    </div>
  )
}
