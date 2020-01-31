// 진료내용 확인
// w

import React, { useEffect } from "react";
import Axios from "axios";

// 임시 데이터
const data = [
  {
    id: 1,
    title: "목감기",
    solution: "물 많이 마시기",
    doctorName: "이국종",
    deadline: "2017-01-13"
  },
  {
    id: 1,
    title: "복통",
    solution: "화장실 많이 가기",
    doctorName: "김수현",
    deadline: "2018-05-04"
  }
];

const Checkdetail = () => {
  // 데이터 받아오는 부분
  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      try {
        const response = await Axios.get("url");
        // set (resopnse.data)
      } catch (e) {
        console.log(e);
      }
      fetchData();
    };
  }, []);

  const dataList = data.map( (data) =>{
  return (<h3 key={data.id}>{data.title} {data.solution} {data.doctorName} {data.deadline}</h3> )
  })

  return (
    <div>
      제목&nbsp; 처방내용 &nbsp; 의사명 &nbsp; 약 &nbsp; 기한
      <hr />
      {dataList}
    </div>
  );
};

export default Checkdetail;
