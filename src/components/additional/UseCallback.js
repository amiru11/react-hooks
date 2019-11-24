import React, { useState, useMemo, useCallback } from "react";

const getAverage = numbers => {
  console.log("평균 값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

function HookCallback() {
  /**
   * useCallback: useMemo와 유사, 렌더링 성능을 최적화하는 상황에서 사용
   * 이벤트 핸들러 함수를 필요할 때만 생성시킴.
   * Return memoizationed callback!
   * useMemo.js에서 onChange, onInsert라는 함수는 리렌더링될 때마다 새로이 생성되는 문제
   * useMemo & useCallback의 차이점: 숫자, 문자, 객체처럼 일반 값을 재사용 - useMemo, 함수를 재사용 - useCallback
   * 항상 렌더링 최적화에 대해서 생각해보기!
   */
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  /**
   * 첫번째 파라미터: 생성하고 싶은 함수
   * 두번째 파라미터: 배열 - 어떤 값이 바뀔 때 함수를 새로 생성하는지 명시하는 부분
   * []: 공백이면 컴포넌트가 렌더링될 때, 단 한 번만 함수 생성
   * [value]: 인풋 내용이 바뀌거나 value값이 바뀔 때마다 새로운 항목 추가
   */
  const handleChange = useCallback(({ target }) => {
    setNumber(target.value);
  }, []); // 첫 렌더링될 때만 사용

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]); // number or list가 변경될 때만 함수 생성

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
