// 진료예약 확인
import React, { Component } from 'react';
import AppointmentCheckList from './AppointmentCheckLilst';
// import Moment from 'react-moment';

//임시 데이터로 테스트 -> 서버에서 데이터 받아와야함
class AppointmentCheck extends Component {
  state={
    items:
    [
      {
        id: 0,
        hospital:"미정",
        reserveDate: "yyyy-MM-dd",
        reserveTime: "10:00",
        status: "예약완료",
        symptom: "두통"
      },
      {
        id: 1,
        hospital:"미정",
        reserveDate: "yyyy-MM-dd",
        reserveTime: "11:00",
        status: "처방완료",
        symptom: "복통"
      },
    ],

  }
  render() {
    const {items} = this.state;
    
    return (
      <div>
         {/* <Moment fromNow ago>1976-04-19T12:59-0500</Moment> */}
        <AppointmentCheckList items={items}/>
      </div>
    );
  }
}

export default AppointmentCheck;
