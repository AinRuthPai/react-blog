/* eslint-disable */

import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

// 데이터 바인딩을 쉽게 하기 위해 react, vue, angular를 사용함
// 데이터 바인딩 -> 데이터를 받아와서 html에 보내는 것
// ex) document.getElementById

function App() {
  // state에 데이터 저장해놓는 이유 -> html이 자동으로 재렌더링이 됨
  // 자주 변경되는 것들은 state 사용하면 좋음
  let [postTitle, postTitleChange] = useState(["HTML", "CSS", "JavaScript"]);
  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, modalChange] = useState(false);
  let [id, idChange] = useState(0);
  let [inputTxt, inputTxtChange] = useState("");

  function changeTitle() {
    // [...]  -> deep copy
    // state는 직접 수정하면 안되고 deep copy를 해서 카피본을 수정해야함
    const newArray = [...postTitle];
    newArray[0] = ["React"];
    postTitleChange(newArray);
  }

  function likeforeach(i) {
    const newLike = [...like];
    newLike[i] = newLike[i] + 1;
    likeChange(newLike);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <button onClick={changeTitle}>버튼</button>
      {/* --- 게시판 --- */}
      {postTitle.map((post, i) => {
        return (
          <div className='list' key={i}>
            <h3
              onClick={() => {
                modalChange(!modal);
                idChange(i);
              }}>
              {post}
            </h3>
            <span
              onClick={() => {
                likeChange(like + 1);
              }}>
              👍
            </span>
            {like}
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className='publish'>
        <input
          onChange={(event) => {
            inputTxtChange(event.target.value);
          }}
        />
        <button
          onClick={() => {
            const postTitleAry = [...postTitle];
            postTitleAry.unshift(inputTxt);
            postTitleChange(postTitleAry);
          }}>
          저장
        </button>
      </div>

      {/* 모달 버튼 */}
      <button
        onClick={() => {
          modalChange(!modal);
        }}>
        Modal
      </button>

      <Profile />

      {/* --- 모달 --- */}
      {modal === true ? <Modal postTitle={postTitle} id={id} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.postTitle[props.id]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;

// 예전 class방식의 react
class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "kim", age: 30 };
  }

  changeName() {
    this.setState({ name: "Park" });
  }

  render() {
    return (
      <div>
        <h3>프로필</h3>
        <p>저는 {this.state.name} 입니다.</p>
        {/* bind를 쓰고 싶지 않으면 changeName에 화살표함수 사용 */}
        <button onClick={this.changeName.bind(this)}>버튼</button>
      </div>
    );
  }
}
