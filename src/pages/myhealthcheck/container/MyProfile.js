import React from "react";
import { Input, TextField, Button } from "@material-ui/core";

const MyProfile = () => {
  // 회원정보 받아오기

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
