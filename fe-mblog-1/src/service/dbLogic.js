import axios from "axios";

export const memberListDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "member/jsonMemberList",
        params: member,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const deptListDB = (dept) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "dept/deptList",
        params: dept,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const deptInsertDB = async (dept) => {
  const response = await axios({
    method: "POST",
    url: process.env.REACT_APP_SPRING_IP + "dept/deptInsert",
    data: dept,
  });
  return response;
};

/* rafce - arrow function export deafault */
