import React from 'react';

const HospitalItem = ({data}) => {
    return (
        <div>
            {data.name} {data.address} 
            <hr/>
        </div>
    );
};

export default HospitalItem;