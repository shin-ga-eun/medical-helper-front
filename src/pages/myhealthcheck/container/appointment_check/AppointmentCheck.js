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
        desease: "두통", //증상
        hospital: "백병원", //예약병원
        regdate: "2020/02/02", //예약날짜
        regtime:"10:00",
        loading: "예약", //상태 (자료형이 뭔지 확인하기)
      },
      {
        desease: "복통", //증상
        hospital: "서울대병원", //예약병원
        regdate: "2020/02/02", //예약날짜
        regtime:"10:00",
        loading: "예약", //상태 (자료형이 뭔지 확인하기)
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
