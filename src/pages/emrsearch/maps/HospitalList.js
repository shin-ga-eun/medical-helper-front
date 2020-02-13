import React from 'react';
import HosipitalItem from './HospitalItem';

const HospitalList = ({datas}) => {

    return (
        <div>
            {datas.map(data=>(
                <HosipitalItem key={data.id} data={data} />
            ))}
           
        </div>
    );
};

export default HospitalList;