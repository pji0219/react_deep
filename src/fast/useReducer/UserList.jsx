import React from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  // 컴포넌트가 마운트 될 때
  // props -> state
  // REST API
  // D3, video.js
  // setInterval, setTimeout

  // 컴포넌트가 언마운트 될 때
  // clearInterval, clearTimeout
  // 라이브러리 인스턴스 제거

  // 컴포넌트의 값이 바뀔 때
  // 처음에 컴포넌트가 나타날 때에도 실행 됨

  // prop로 받아온 값을 참조하거나 useState로 관리하는 값을 참조하는 경우에는 deps에 넣어줘야 한다.

  // useEffect(() => {
  //   console.log('user 값이 설정 됨');
  //   console.log(user);

  //   return () => {
  //     console.log('user 값이 바뀌기 전');
  //     console.log(user);
  //   };
  // }, [user]);
  console.log('userlist');
  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>{' '}
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
