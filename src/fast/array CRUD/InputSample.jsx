import React, { useState, useRef } from 'react';

function InputSample() {
  const [values, setValues] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = values;

  /*
    리액트에서 DOM을 직접 선택 해야하는 상황
    특정 엘레먼트의 크기나 위치를 가져와야 하는 경우
    스크롤바 위치를 가져오거나 설정 해야하는 경우
    포커스를 설정 해줘야 하는 경우
    HTML 비디오 관련 라이브러리를 사용하는 경우
    D3, chart.js등 그래프 관련 라이브러리를 사용하는 경우
  */
  // 이렇게 하면  nameInput라는 객체가 만들어짐
  const nameInput = useRef();

  const onChange = (event) => {
    const { name, value } = event.target;

    // 배열이나 객체의 상태를 변경할 때는 기존의 객체를 복사를 해서 불변성을 지켜줘야한다. 그렇지 않고 상태를 변경하면 리액트가 감지를 못한다.
    // 그리고 불변성을 지켜줘야만 컴포넌트 업데이트 성능을 최적화 시킬 수 있다.
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onReset = () => {
    setValues({
      ...values,
      name: '',
      nickname: '',
    });

    // current를 사용하면 해당 돔을 가리키게 되고 focus()라는 돔 api를 쓰면 그쪽으로 포커스가 된다.
    nameInput.current.focus();
  };

  return (
    <>
      {/* 접근 하고 싶은 DOM이 있는 곳에 ref={}를 이용해서 useRef로 만든 객체를 넣어준다. */}
      <input
        name="name"
        onChange={onChange}
        type="text"
        value={name}
        placeholder="이름"
        ref={nameInput}
      />
      <input
        name="nickname"
        type="text"
        onChange={onChange}
        value={nickname}
        placeholder="닉네임"
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>이름: </b>
        {name}
        <br />
        <b>닉네임: </b>
        {nickname}
      </div>
    </>
  );
}

export default InputSample;
