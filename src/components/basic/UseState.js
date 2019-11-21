import React, { useState } from "react";

export function HookState({ initialValue }) {
  /**
   * state: 상태 값
   * setState: state를 갱신하는 용도: 새 state를 받아 컴포넌트 리렌더링을 Que에 등록한다.
   */
  const [value, setValue] = useState(initialValue);

  const handleChange = ({ target }) => {
    const { value } = target;
    if (value.length < 10) setValue(value);
  };

  return <input type="text" onChange={handleChange} value={value} />;
}
