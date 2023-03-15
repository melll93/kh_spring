import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { memberListDB } from "../../service/dbLogic";

const MemberPage = () => {
  const [member, setMember] = useState({});

  useEffect(() => {
    const memberList = async () => {
      const res = await memberListDB(member);
      console.log(res.data);
    };
    memberList();
  }, []);

  return <div>MemberPage</div>;
};

export default MemberPage;
