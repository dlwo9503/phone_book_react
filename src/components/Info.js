import React, { useEffect, useState } from "react";
import axios from "axios";

const Info = ({ selectContactId }) => {
  const [selectContact, setSelectContact] = useState({});
  useEffect(() => {
    axios
      .get("https://contact-server1.herokuapp.com/contacts/" + selectContactId)
      .then((res) => {
        setSelectContact(res.data);
      });
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
