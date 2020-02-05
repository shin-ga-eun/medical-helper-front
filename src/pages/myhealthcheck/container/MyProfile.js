import React, { useEffect, useState } from "react";
import { Input, TextField, Button } from "@material-ui/core";
import Axios from "axios";

const MyProfile = () => {
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [birthday,setBirthday] = useState('');
  
  // 회원정보 받아오기
   useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      try {

        // url 수정하기
        const response = await Axios.get("url");
        // set (resopnse.data)
        setEmail(response.data.email);
        setName(response.data.name);
        setPhone(response.data.phone);
        setAddress(response.data.address);
        setBirthday(response.data.birthday);
      } catch (e) {
        console.log(e);
      }
      fetchData();
    };
  }, []);
  

  // 임시 회원데이터
  const data = {
    email: "spawnnim@naver.com",
    name: "윤영훈",
    phone: "010-5229-3673",
    address: "서울시 성산동",
    birthday: "1996-01-08"
  };

  return (
    <div>
      이메일 : <Input type="text" value={data.email} readOnly /> 
      <br />
      이 름 :{" "}
      <Input
        value={data.name}
        readOnly
      />
      <br />
      핸드폰 :{" "}
      <Input
        value={data.phone}
        readOnly
      />
      <br />주 소 :{" "}
      <Input
        value={data.address}
        readOnly
      />
      <br />
      생년월일{" "}
      <Input
        value={data.birthday}
        readOnly
      />{" "}
      <br />
      <Button style={{ margin: 20 }} variant="contained" color="primary">
        수정하기
      </Button>
    </div>
  );
};

export default MyProfile;
