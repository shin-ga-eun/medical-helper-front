import React, { useState } from "react";
import { Button } from "@material-ui/core";

const Search = () => {
  // 검색할 문자열 저장
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onClick = async e => {
    // 새로고침 방지
    e.preventDefault();

    // 버튼 속성에 있는 값 setText로 설정
    setText(e.target.value);

    // 데이터에서 value값이 포함된 병원 출력하기
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색할 병원을 입력하세요."
        value={text}
        onChange={onChange}
        name="text"
      />
      <Button variant="outlined" color="secondary" onClick={onClick}>
        검색
      </Button>
      <br />
      <Button variant="outlined" color="primary">
        내과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        소아과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        피부과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        정형외과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        외과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        가정의학과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        신경외과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        마취통증과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        성형외과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        산부인과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        안과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        정신의학과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        비뇨기과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        치과
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        한의원
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        노인
      </Button>
    </div>
  );
};

export default Search;
