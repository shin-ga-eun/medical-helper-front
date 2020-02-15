import React, { useState, useEffect } from "react";
import Axios from "axios";
import HospitalList from "./HospitalList";


const Search = ({ xPos, yPos }) => {
  // // 임시 데이터
  // const datas = [
  //   {
  //     id: 33946,
  //     name: "한빛내과의원",
  //     location: null,
  //     tel: "051-505-9922",
  //     address: "부산광역시 동래구 아시아드대로 234 206호 (온천동, 반도보라상가)",
  //     homepage: null,
  //     hospitalCodeName: "의원",
  //     doctorCount: 1,
  //     openDate: null,
  //     generalDoctorCount: 0,
  //     hospitalUrl: null,
  //     internCount: 0,
  //     postNo: "47837",
  //     residentCount: 0,
  //     specialDoctorCount: 1,
  //     cityCodeName: "부산"
  //   },
  //   {
  //     id: 16047,
  //     name: "서면바른내과의원",
  //     location: null,
  //     tel: "051-805-4313",
  //     address: "부산광역시 부산진구 중앙대로 700 3층 (부전동, 고려빌딩)",
  //     homepage: null,
  //     hospitalCodeName: "의원",
  //     doctorCount: 1,
  //     openDate: null,
  //     generalDoctorCount: 0,
  //     hospitalUrl: null,
  //     internCount: 0,
  //     postNo: "47295",
  //     residentCount: 0,
  //     specialDoctorCount: 1,
  //     cityCodeName: "부산"
  //   },
  //   {
  //     id: 16047,
  //     name: "서면바른내과의원",
  //     location: null,
  //     tel: "051-805-4313",
  //     address: "부산광역시 부산진구 중앙대로 700 3층 (부전동, 고려빌딩)",
  //     homepage: null,
  //     hospitalCodeName: "의원",
  //     doctorCount: 1,
  //     openDate: null,
  //     generalDoctorCount: 0,
  //     hospitalUrl: null,
  //     internCount: 0,
  //     postNo: "47295",
  //     residentCount: 0,
  //     specialDoctorCount: 1,
  //     cityCodeName: "부산"
  //   },
  //   {
  //     id: 16047,
  //     name: "서면바른내과의원",
  //     location: null,
  //     tel: "051-805-4313",
  //     address: "부산광역시 부산진구 중앙대로 700 3층 (부전동, 고려빌딩)",
  //     homepage: null,
  //     hospitalCodeName: "의원",
  //     doctorCount: 1,
  //     openDate: null,
  //     generalDoctorCount: 0,
  //     hospitalUrl: null,
  //     internCount: 0,
  //     postNo: "47295",
  //     residentCount: 0,
  //     specialDoctorCount: 1,
  //     cityCodeName: "부산"
  //   }
  // ];

  const [data, setData] = useState([]);

  const onClick = async e => {
    // 새로고침 방지
    e.preventDefault();

    // 데이터 가져오는 부분
    try {
      const response = await Axios.get(
        `/medicalHelper/hospital/gps/name/${yPos}/${xPos}/${
          e.target.value
        }?pageNo=${1}`
      );
      console.log(response.data);
      setData(response.data);
      console.log(data)
      
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {/* 검색창을 통해 병원리스트 출력
       <input
        type="text"
        placeholder="검색할 병원을 입력하세요."
        value={text}
        onChange={onChange}
        name="text"
      />
      <button variant="outlined" color="secondary" onClick={onClick}>
        검색
      </button> 
      */}
      <br />
      <button variant="outlined" value="내과" color="primary" onClick={onClick}>
        내과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="소아과"
        color="primary"
        onClick={onClick}
      >
        소아과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="피부과"
        color="primary"
        onClick={onClick}
      >
        피부과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="정형외과"
        color="primary"
        onClick={onClick}
      >
        정형외과
      </button>
      &nbsp;
      <button variant="outlined" value="외과" color="primary" onClick={onClick}>
        외과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="가정의학과"
        color="primary"
        onClick={onClick}
      >
        가정의학과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="신경외과"
        color="primary"
        onClick={onClick}
      >
        신경외과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="마취통증과"
        color="primary"
        onClick={onClick}
      >
        마취통증과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="성형외과"
        color="primary"
        onClick={onClick}
      >
        성형외과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="산부인과"
        color="primary"
        onClick={onClick}
      >
        산부인과
      </button>
      &nbsp;
      <button variant="outlined" value="안과" color="primary" onClick={onClick}>
        안과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="정신의학과"
        color="primary"
        onClick={onClick}
      >
        정신의학과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="비뇨기과"
        color="primary"
        onClick={onClick}
      >
        비뇨기과
      </button>
      &nbsp;
      <button variant="outlined" value="치과" color="primary" onClick={onClick}>
        치과
      </button>
      &nbsp;
      <button
        variant="outlined"
        value="한의원"
        color="primary"
        onClick={onClick}
      >
        한의원
      </button>
      &nbsp;
      <button variant="outlined" value="노인" color="primary" onClick={onClick}>
        노인
      </button>
      <hr/>

      <HospitalList data={data} />
    </div>
  );
};

export default Search;
