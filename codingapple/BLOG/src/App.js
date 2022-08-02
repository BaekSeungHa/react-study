/* eslint-disable*/

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let post = "대구 라면 맛집";
  let [글제목, 글제목변경] = useState([
    "오우 저치기~",
    "외쳐 수찬갓",
    "쵸비우승",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");
  let [writeDate, setWriteDate] = useState("");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>tech blog</h4>
      </div>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          입력값 == "" ? null : copy.unshift(입력값);
          글제목변경(copy);

          let copycount = [...like];
          입력값 == "" ? null : copycount.unshift(0);
          setlike(copycount);

          let copyWriteDate = [...writeDate];
          const now = new Date();
          const month = now.getMonth() + 1;
          const date = now.getDate();

          copyWriteDate == ""
            ? null
            : copyWriteDate.unshift(`${month}월 ${date}일`);
          setWriteDate(copyWriteDate);
        }}
      >
        story upload
      </button>
      {modal == true ? <Modal title={title} 글제목={글제목} /> : null}
    </div>
  );

  function Modal(props) {
    return (
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    );
  }
}

export default App;

/* <button onClick={orderTitle}>가나다순으로 정렬하기</button> */

// function orderTitle() {

//   let newOrder = [...title].sort();
//   setTitle(newOrder);
// }
/* <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        글수정
      </button> */
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/* <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(true);
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//return()안에는 병룔로
//태그 2개 이상 기입금지
//map //1. array 자료 갯수만큼 함수안의 코드 실행해줌
//2. 함수의 파라미터는 array안에 있던 자료임
//3. return에 뭐 적으면 array로 담아줌
//함수는 return문 밖에서 사용
