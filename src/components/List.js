import React from "react";
import ListItem from "./ListItem";
import { useRecoilValue } from "recoil";
import { keywordState, contactState } from "../state";

const List = () => {
  const keyword = useRecoilValue(keywordState);
  const contact = useRecoilValue(contactState);
  return (
    <ul className="eysHZq">
      {contact &&
        contact
          .filter(
            (item) =>
              item.name.indexOf(keyword) !== -1 ||
              String(item.age).indexOf(keyword) !== -1 ||
              item.phoneNumber.indexOf(keyword) !== -1 ||
              item.email.indexOf(keyword) !== -1 ||
              (item.description && item.description.indexOf(keyword) !== -1)
          )
          .map((item) => (
            <ListItem
              id={item.id}
              name={item.name}
              phoneNumber={item.phoneNumber}
            />
          ))}
    </ul>
  );
};

export default List;
