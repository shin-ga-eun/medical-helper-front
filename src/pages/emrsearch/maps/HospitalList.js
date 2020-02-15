/*global kakao*/

import React from 'react';
import HosipitalItem from './HospitalItem';

const HospitalList = ({data}) => {

    return (
        <>
        {/* <div
            id="map"
            className="Map"
            style={{ width: "100%", height: "550px" }}
        ></div> */}


        <div>
            {data.map(data=>(
                <HosipitalItem key={data.id} data={data}  />
            ))}

            
           
        </div>
        </>
    );
};

export default HospitalList;