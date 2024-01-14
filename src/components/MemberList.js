import React from "react";
import Member from "./Member";

const MemberList = (props) => {
  const { list } = props;

  return (
    <>
      {list.map((item) => {
        <Member key={item.id} member={item} />;
      })}
    </>
  );
};

export default MemberList;
