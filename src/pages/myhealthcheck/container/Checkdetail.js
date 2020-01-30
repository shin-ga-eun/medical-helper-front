import React, { useState } from "react";
import { TextField, Checkbox } from "@material-ui/core";

const Checkdetail = () => {
  const [form, setForm] = useState({
    title: "",
    solution: "",
    doctorName: "",
    reservationId: "",
    breakfast: false,
    lunch: false,
    dinner: false,
    deadline: ""
  });

  const {
    title,
    solution,
    doctorName,
    reservationId,
    breakfast,
    lunch,
    dinner,
    deadline
  } = form;

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  //     "title": 1,
  // "solution": "꾸준한 운동, 약 3일치",
  // "doctorName": "이국종",
  // "reservationId" : 6,
  // "breakfast" : true,
  // "lunch" : true,
  // "dinner" : true,
  // "deadline" : "2020-01-15T00:00"

  return (
    <div>
      <form>
        <TextField
          id="standard-basic"
          label="제목"
          name="title"
          value={title}
          onChange={onChange}
          style={{ width: 300 }}
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="처방내용"
          style={{ width: 600 }}
          name="solution"
          value={solution}
          onChange={onChange}
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="교수이름"
          style={{ width: 100 }}
          name="doctorName"
          value={doctorName}
          onChange={onChange}
        />
        <br />
        <br />
        <Checkbox onChange={onChange} />
        <Checkbox value="primary" />
        <Checkbox value="primary" />
        <br />
        <br />
        <TextField
          id="datetime-local"
          label="~까지"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          name="deadline"
          value={deadline}
          onChange={onChange}
        />
        >
      </form>
    </div>
  );
};

export default Checkdetail;
