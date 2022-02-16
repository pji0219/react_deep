import React, { useCallback, useMemo, useRef, useReducer } from 'react';
import Counter from './fast/useReducer/Counter';
import CreateUser from './fast/useReducer/CreateUser';
import UserList from './fast/useReducer/UserList';

// 활성 사용자가 변경 될때에만 수를 세야 하는데 컴포넌트가 리렌더링 될 때에도 세기 때문에 useMemo로 연산한 값을 재사용 해야한다.
// useMemo는 특정 값이 바뀌었을 때만 연산을 하도록 처리하고 값이 안바뀌었을 때는 이전에 만들어 놨던 값을 재사용할 수 있게 함
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active === true).length;
}

const initialState = {
  input: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'park',
      email: 'park@email.com',
      active: false,
    },
    {
      id: 2,
      username: 'kim',
      email: 'kim@email.com',
      active: false,
    },
    {
      id: 3,
      username: 'lee',
      email: 'lee@email.com',
      active: false,
    },
  ],
};

function reducer(state, action) {
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;
  const { username, email } = state.input;

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
  }, []);

  return (
    <>
      <CreateUser username={username} email={email} />
      <UserList users={users} />
      <div>활성 사용자 수: 0</div>
      <Counter />
    </>
  );
}

export default App;
