/* eslint-disable */

import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

// 데이터 바인딩을 쉽게 하기 위해 react, vue, angular를 사용함
// 데이터 바인딩 -> 데이터를 받아와서 html에 보내는 것
// ex) document.getElementById

function App() {
  // state에 데이터 저장해놓는 이유 -> html이 자동으로 재렌더링이 됨
  // 자주 변경되는 것들은 state 사용하면 좋음
  let [postTitle, postTitleChange] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [like, likeChange] = useState(0, 0, 0);
  let [modal, modalChange] = useState(false);

  function changeTitle() {
    // [...]  -> deep copy
    // state는 직접 수정하면 안되고 deep copy를 해서 카피본을 수정해야함
    const newArray = [...postTitle];
    newArray[0] = "여자 코트 추천";
    postTitleChange(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={changeTitle}>버튼</button>
      {/* --- 게시판 --- */}
      {postTitle.map((post) => {
        return (
          <div className="list">
            <h3
              onClick={() => {
                modalChange(!modal);
              }}
            >
              {post}
            </h3>
            <span
              onClick={() => {
                likeChange(like + 1);
              }}
            >
              👍
            </span>
            {like}
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}
      {/* --- 모달 --- */}
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
