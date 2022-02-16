import React, { useCallback, useMemo, useRef, useState } from 'react';
import CreateUser from './fast/array CRUD/CreateUser';
import UserList from './fast/array CRUD/UserList';
import Counter from './fast/useReducer/Counter';

// 활성 사용자가 변경 될때에만 수를 세야 하는데 컴포넌트가 리렌더링 될 때에도 세기 때문에 useMemo로 연산한 값을 재사용 해야한다.
// useMemo는 특정 값이 바뀌었을 때만 연산을 하도록 처리하고 값이 안바뀌었을 때는 이전에 만들어 놨던 값을 재사용할 수 있게 함
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active === true).length;
}

function App() {
  // input을 위한 state
  const [values, setValues] = useState({
    username: '',
    email: '',
  });

  const { username, email } = values;

  // user state
  const [users, setUsers] = useState([
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
  ]);

  // useCallback을 사용하면 매번 함수를 새롭게 만드는게 아니라 뎁스 안에 넣어준 값이 바뀔때만 함수를 만들고 그렇지 않으면 재사용하게 한다.
  // 함수안에서 의존하는 값을 뎁스에 넣어주면 된다. state나 props
  const onChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  // 리렌더링이 필요 없는 변수를 useRef를 사용해서 관리한다.
  // useRef의 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다.
  // useRef를 사용해서 관리하는 값은 컴포넌트가 리렌더링 되어도 계속 기억 된다.
  // usestate를 이용해서 관리해도 되지만 리렌더링이 필요 없는 경우이기 때문에 굳이 그렇게 할 필요가 없다.
  const nextId = useRef(4);
  const userInput = useRef();

  // username, email도 state에서 빼준 state값이기 때문에 뎁스에 넣어줘야함
  // 참조하는 state를 setState에 함수 파라미터 형태로 하면 deps에 안 넣어줘도 된다.
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };

    // 방법1
    // setUsers([...users, user]);

    // 방법2
    setUsers((users) => users.concat(user));

    setValues({
      username: '',
      email: '',
    });

    nextId.current += 1;

    userInput.current.focus();
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  // update
  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  // useMemo 사용
  const count = useMemo(() => countActiveUsers(users), [users]);
  console.log('app');
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        userInput={userInput}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
      <Counter />
    </>
  );
}

export default App;
