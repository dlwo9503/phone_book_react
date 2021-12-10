import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  useSetRecoilState, // 구독하는 값을 변경하는 함수만 반환합니다.
} from "recoil";
import { addContactState } from "../state";

const URL = "https://contact-server1.herokuapp.com/contacts/";

const Add = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    email: "",
    description: "",
  });
  const { name, phoneNumber, age, email, description } = inputs;
  const [check, setCheck] = useState(false); // 유효성 체크용
  const setAddContactUseSetRecoilState = useSetRecoilState(addContactState);

  const handleConfirm = async () => {
    try {
      await axios.post(
        URL,
        JSON.stringify({
          name: name,
          age: Number(age),
          phoneNumber: phoneNumber,
          email: email,
          description: description,
        }),
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      );

      setAddContactUseSetRecoilState(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setAddContactUseSetRecoilState(false);
  };

  const handleInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    name && age && phoneNumber && email ? setCheck(true) : setCheck(false);
  }, [name, age, phoneNumber, email]);

  return (
    <div>
      <div className="biCrYn">
        <div className="syKsX">
          <h1 className="hmqpxx">연락처를 등록하세요</h1>
          <div className="jEEywD">
            <label className="iPexDg">이름</label>
            <input
              className="kFmqyc"
              type="text"
              name="name"
              value={name}
              onChange={handleInputs}
            />
          </div>
          <div className="jEEywD">
            <label className="iPexDg">연락처</label>
            <input
              className="kFmqyc"
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputs}
            />
          </div>
          <div className="jEEywD">
            <label className="iPexDg">나이</label>
            <input
              className="kFmqyc"
              type="text"
              name="age"
              value={age}
              onChange={handleInputs}
            />
          </div>
          <div className="jEEywD">
            <label className="iPexDg">email</label>
            <input
              className="kFmqyc"
              type="text"
              name="email"
              value={email}
              onChange={handleInputs}
            />
          </div>
          <div className="jEEywD">
            <label className="iPexDg">설명</label>
            <input
              className="kFmqyc"
              type="text"
              name="description"
              value={description}
              onChange={handleInputs}
            />
          </div>
          <div className="eEJWPz">
            <button
              disabled={!check}
              className="eraKfR"
              onClick={handleConfirm}
            >
              확인
            </button>
            <button className="hKymwP" onClick={handleCancel}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
