import React, { useState, useMemo } from "react";

const getAverage = numbers => {
  console.log("평균 값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

function HookMemo() {
  /**
   * useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화
   */
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const handleChange = ({ target }) => {
    setNumber(target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  // useMemo를 통해서 원하는 값만 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산한 결과를 다시 사용하는 방식
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={handleChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
}

export default HookMemo;
