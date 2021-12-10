import React, { useEffect } from "react";
import Add from "./Add";
import List from "./List";
import Info from "./Info";
import axios from "axios";

import { useRecoilState, useSetRecoilState } from "recoil";
import {
  isLodingState,
  addContactState,
  selectContactIdState,
  keywordState,
  contactState,
} from "../state";

const URL = "https://contact-server1.herokuapp.com/contacts/";

const Main = () => {
  const setContact = useSetRecoilState(contactState); // 전체 연락처 갑 변경 함수
  const [keyword, setKeyword] = useRecoilState(keywordState); // 검색어
  const [addContact, setAddContact] = useRecoilState(addContactState); // 추가버튼 클릭 유무
  const [selectContactId, setSelectContactId] =
    useRecoilState(selectContactIdState); // 선택한 연락처 id
  const [isLoding, setIsLoding] = useRecoilState(isLodingState); // 로딩화면

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  }; // handleChangeKeyword 와 같은 동사형으로 함수 이름을 짓는게 좋음 ***

  const handleAddContact = () => {
    setAddContact(true);
  };

  const handleDeleteContact = async () => {
    try {
      await axios.delete(URL + selectContactId);
      setSelectContactId(0); // 선택 연락처 초기화
      getAllContact();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllContact = async () => {
    try {
      const result = await axios.get(URL);
      setContact(result.data);
      setIsLoding(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContact();
  }, [addContact]);

  return (
    <div className="biCrYn">
      {isLoding ? (
        addContact ? (
          <Add />
        ) : (
          <>
            <div className="kMthTr">
              <div className="gfuSqG">
                <input
                  placeholder="검색어를 입력하세요."
                  className="dJXsSm"
                  value={keyword}
                  onChange={handleChangeKeyword}
                />
              </div>
              <List />
            </div>
            {selectContactId === 0 ? (
              <div className="DykGo">
                <div className="jibPFy">선택된 연락처가 없습니다.</div>
              </div>
            ) : (
              <Info />
            )}
            <button className="ccTnQh kpPvTx" onClick={handleAddContact}>
              +
            </button>
            <button
              disabled={!selectContactId}
              className="ccTnQh lpaEYv"
              onClick={handleDeleteContact}
            >
              -
            </button>
          </>
        )
      ) : (
        <h1>데이터를 가져오는 중...</h1>
      )}
    </div>
  );
};

export default Main;
