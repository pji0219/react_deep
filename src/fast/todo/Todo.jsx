import React, { useState } from 'react';

function Todo({ todo, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const { id, text } = todo;

  const onEdit = () => {
    setOpen(!open);
  };

  const onChange = (evnet) => {
    setValue(evnet.target.value);
  };

  return (
    <li>
      <span>{text}</span>
      {open && (
        <>
          <input
            type="text"
            onChange={onChange}
            value={value}
            placeholder="수정할 텍스트를 입력하세요."
          />
          <button
            onClick={() => {
              onUpdate(id, value);
              onEdit();
            }}
          >
            완료
          </button>
        </>
      )}
      <button onClick={onEdit}>수정</button>
    </li>
  );
}

export default Todo;
