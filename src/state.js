import { atom } from "recoil";

const isLodingState = atom({
  // 로딩 여부
  key: "isLoding",
  default: false,
});

const addContactState = atom({
  // 추가버튼 클릭 유무
  key: "addContact",
  default: false,
});

const selectContactIdState = atom({
  // 선택한 연락처 id
  key: "selectContactId",
  default: 0,
});

const keywordState = atom({
  // 검색어
  key: "keyword",
  default: "",
});

const contactState = atom({
  // 전체 연락처 담을 배열
  key: "contact",
  default: [],
});

export {
  isLodingState,
  addContactState,
  selectContactIdState,
  keywordState,
  contactState,
};
