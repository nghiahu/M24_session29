import React,{useState} from 'react'

export default function Bt4() {
    const [dataIpn, setData] = useState<string>();
    const getdata = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData(event.target.value);
      };
  return (
    <div>Bài tập 4
        <h3>TỈnh/Thành phố: {dataIpn}</h3>
        <select onChange={getdata}>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hải Phòng">Hải Phòng</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
        </select>

    </div>
  )
}

