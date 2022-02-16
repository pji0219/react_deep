import React from 'react';

function CreateUser({ username, email, onChange, onCreate, userInput }) {
  console.log('createUser');
  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
        ref={userInput}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </>
  );
}

// React.memo를 쓰면 props가 바뀌었을 때만 리렌더링 해준다.
export default React.memo(CreateUser);
