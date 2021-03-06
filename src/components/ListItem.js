import React from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectContactIdState } from "../state";

const Items = styled.li`
  display: flex;
  background-color: ${(props) => (props.id ? "rgb(40, 173, 250)" : "inherit")};
`;

const Item = styled.button`
  flex: 1 1 0%;
  height: 80px;
  border-width: 0px 0px 1px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  border-image: initial;
  border-bottom-style: solid;
  border-bottom-color: rgb(212, 211, 211);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  padding-left: 20px;
  z-index: 0;
  background-color: transparent;
  color: ${(props) => (props.id ? "white" : "inherit")};
  cursor: pointer;
`;

const ListItem = ({ id, name, phoneNumber }) => {
  const selectContactId = useRecoilValue(selectContactIdState);
  const setSelectContactId = useSetRecoilState(selectContactIdState);
  const handleListItem = () => {
    setSelectContactId(id);
  };
  const handleFocusContact = () => {
    setSelectContactId(id);
  };

  return (
    <Items id={id === selectContactId} onClick={handleListItem}>
      <Item id={id === selectContactId} onFocus={handleFocusContact}>
        <div className="jcTaHb">{name}</div>
        <div className="hydYaP">{phoneNumber}</div>
      </Item>
    </Items>
  );
};

export default ListItem;
