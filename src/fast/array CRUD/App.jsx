import React, { useRef, useState } from 'react';
import CreateUser from './fast/CreateUser';
import UserList from './fast/UserList';

function App() {
  // input을 위한 state
  const [values, setValues] = useState({
    username: '',
    email: '',
    active: false,
  });

  const { username, email, active } = values;

  // user state
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'park',
      email: 'park@email.com',
      active: true,
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

  const onChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  // 리렌더링이 필요 없는 변수를 useRef를 사용해서 관리한다.
  // useRef의 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다.
  // useRef를 사용해서 관리하는 값은 컴포넌트가 리렌더링 되어도 계속 기억 된다.
  // usestate를 이용해서 관리해도 되지만 리렌더링이 필요 없는 경우이기 때문에 굳이 그렇게 할 필요가 없다.
  const nextId = useRef(4);
  const userInput = useRef();

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // 방법1
    // setUsers([...users, user]);

    // 방법2
    setUsers(users.concat(user));

    setValues({
      username: '',
      email: '',
    });

    nextId.current += 1;

    userInput.current.focus();
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // update
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        active={active}
        onChange={onChange}
        onCreate={onCreate}
        userInput={userInput}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
