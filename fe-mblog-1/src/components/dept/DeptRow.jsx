import React from "react";
import { Link } from "react-router-dom";

const DeptRow = ({ dept }) => {
  console.log(dept);
  return (
    <>
      <tr>
        <td>#</td>
        <Link to={"/deptdetail/" + dept.DEPTNO} className="btn btn-primary">
          <td>{dept.DEPTNO}</td>
        </Link>
        <td>{dept.DNAME}</td>
        <td>{dept.LOC}</td>
      </tr>
    </>
  );
};

export default DeptRow;
