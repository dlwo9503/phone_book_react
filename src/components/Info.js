import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { selectContactIdState } from "../state";

const URL = "https://contact-server1.herokuapp.com/contacts/";

const Info = () => {
  const [selectContact, setSelectContact] = useState({});

  const selectContactId = useRecoilValue(selectContactIdState);

  const getSelectContact = async () => {
    try {
      const result = await axios.get(URL + selectContactId);
      setSelectContact(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectContact();
  }, [selectContactId]);

  return (
    <div class="DykGo">
      <dl class="XJxhY">
        <dt class="dJdFwe">이름</dt>
        <dd class="bAVzgZ">{selectContact.name}</dd>
      </dl>
      <dl class="XJxhY">
        <dt class="dJdFwe">나이</dt>
        <dd class="bAVzgZ">{selectContact.age}</dd>
      </dl>
      <dl class="XJxhY">
        <dt class="dJdFwe">전화번호</dt>
        <dd class="bAVzgZ">{selectContact.phoneNumber}</dd>
      </dl>
      <dl class="XJxhY">
        <dt class="dJdFwe">Email</dt>
        <dd class="bAVzgZ">{selectContact.email}</dd>
      </dl>
      <dl class="XJxhY">
        <dt class="dJdFwe">설명</dt>
        <dd class="bAVzgZ">{selectContact.description}</dd>
      </dl>
    </div>
  );
};

export default Info;
