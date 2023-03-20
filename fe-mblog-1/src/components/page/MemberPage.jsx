import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { memberListDB } from "../../service/dbLogic";

const MemberPage = ({ imageUploader }) => {
  const [member, setMember] = useState({});

  useEffect(() => {
    const memberList = async () => {
      const res = await memberListDB(member);
      console.log(res.data);
    };
    memberList();
  }, []);

  const imgChange = async (e) => {
    const uploaded = await imageUploader.upload(e.target.files[0]);
    console.log(`${uploaded.public_id} ${uploaded.format} ${uploaded.url}`);
  };

  return (
    <div>
      <h3>MemberPage</h3>
      <input type="file" name="mimg" id="mimg" onChange={imgChange} />
    </div>
  );
};

export default MemberPage;
