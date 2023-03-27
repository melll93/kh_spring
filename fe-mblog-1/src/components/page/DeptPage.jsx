import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deptInsertDB, deptListDB } from "../../service/dbLogic";
import "../../styles/style.css";
import DeptRow from "../dept/DeptRow";
import BlogHeader from "../include/BlogHeader";
const DeptPage = ({ imageUploader }) => {
  const navigate = new useNavigate();
  const [deptList, setDeptList] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [deptno, setDeptno] = useState(0);
  const [dname, setDname] = useState(0);
  const [loc, setLoc] = useState(0);
  const [files, setFiles] = useState({ filename: null, fileurl: null });

  const handleDeptno = useCallback((value) => {
    console.log(value);
    setDeptno(value);
  }, []);
  const handleDname = useCallback((value) => {
    console.log(value);
    setDname(value);
  }, []);
  const handleLoc = useCallback((value) => {
    console.log(value);
    setLoc(value);
  }, []);

  // 조건 검색 구현
  const reactSearch = () => {};

  // 부서목록 가져오기
  const getDeptList = () => {};

  // 부서목록 JSON 포맷 가져오기
  const jsonDeptList = async () => {
    const res = await deptListDB({ deptno: 0 });
    if (res.data) {
      setDeptList(res.data);
    }
  };

  useEffect(() => {
    jsonDeptList();
  }, []);

  // 이미지 파일 첨부
  const imgChange = async (e) => {
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setFiles({
      filename: uploaded.public_id + "." + uploaded.format,
      fileurl: uploaded.url,
    });
    //input의 이미지 객체 얻어오기
    const upload = document.querySelector("#dimg");
    //이미지를 집어넣을 곳의 부모 태그
    const holder = document.querySelector("#uploadImg");
    const file = upload.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      console.log(img);
      if (img.width > 150) {
        img.width = 150;
      }
      holder.innerHTML = "";
      holder.appendChild(img);
    };
    reader.readAsDataURL(file);
    return false;
  };
  // 부서 등록
  const deptInsert = async () => {
    const dept = {
      deptno,
      dname,
      loc,
      filename: files.filename,
      fileurl: files.fileurl,
    };
    const res = await deptInsertDB(dept);

    if (!res.data) {
      console.log("부서등록 실패");
    } else {
      console.log("부서등록 성공");
      // navigate("/dept");
      handleClose();
    }
  };

  return (
    <>
      <BlogHeader />
      <div className="page-header">
        <h2>
          부서관리&nbsp;<i className="fa-solid fa-angles-right"></i>&nbsp;
          <small>부서목록</small>
        </h2>
        <hr />
      </div>
      <div className="row">
        <div className="col-3">
          <select id="gubun" className="form-select" aria-label="분류선택">
            <option defaultValue>분류선택</option>
            <option value="deptno">부서번호</option>
            <option value="dname">부서명</option>
            <option value="loc">지역</option>
          </select>
        </div>
        <div className="col-6">
          <input
            type="text"
            id="keyword"
            className="form-control"
            placeholder="검색어를 입력하세요"
            aria-label="검색어를 입력하세요"
            aria-describedby="btn_search"
          />
        </div>
        <div className="col-3">
          <Button variant="danger" id="btn_search" onClick={reactSearch}>
            검색
          </Button>
        </div>
      </div>
      <div className="book-list">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>부서번호</th>
              <th>부서명</th>
              <th>지역</th>
            </tr>
          </thead>
          <tbody>
            {deptList.map((dept) => (
              <DeptRow key={dept.DEPTNO} dept={dept} />
            ))}
          </tbody>
        </Table>
        <hr />
        <div className="booklist-footer">
          <Button variant="warning" onClick={jsonDeptList}>
            전체조회
          </Button>
          &nbsp;
          <Button variant="success" onClick={handleShow}>
            부서등록
          </Button>
        </div>
      </div>
      {/* ========================== [[ 도서등록 Modal ]] ========================== */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>부서등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="f_dept" method="get">
            <input type="hidden" id="fileName" name="fileName" />
            <input type="hidden" id="fileURL" name="fileURL" />
            <Form.Group className="mb-3" controlId="formBasicDname">
              <Form.Label>부서번호</Form.Label>
              <Form.Control
                type="text"
                id="deptno"
                placeholder="Enter 부서번호"
                onChange={(e) => {
                  handleDeptno(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDname">
              <Form.Label>부서명</Form.Label>
              <Form.Control
                type="text"
                id="dname"
                placeholder="Enter 부서명"
                onChange={(e) => {
                  handleDname(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLoc">
              <Form.Label>지역</Form.Label>
              <Form.Control
                type="text"
                id="loc"
                placeholder="Enter 지역"
                onChange={(e) => {
                  handleLoc(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicOffice">
              <Form.Label>건물이미지</Form.Label>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                id="dimg"
                name="dimg"
                onChange={imgChange}
              />
            </Form.Group>
            <div id="uploadImg">
              <img
                className="thumbNail"
                src="http://via.placeholder.com/200X250"
                alt="미리보기"
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={deptInsert}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ========================== [[ 부서등록 Modal ]] ========================== */}
    </>
  );
};

export default DeptPage;
