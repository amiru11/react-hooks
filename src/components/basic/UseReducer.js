import React, { useReducer } from "react";

/**
 * useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용
 * 현재상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태로 변환시키는 함수
 * 새로운 상태 생성 시, 반드시! 불변성 지키기
 * 가장 큰 장점: 컴포넌트 업데이트 로직을 컴포넌트 바깥에 빼내서 사용할 수 있다!
 */
function reducer(state, action) {
  // action.type에 따라 다른 작업수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무 것도 해당하지 않을 때, 기존 상태 반환
      return state;
  }
}

export function HookReducerOne() {
  /**
   * 1. state: 현재 가리키고 있는 상태 값
   * 2. dispatch: 액션을 발생시키는 함수 (함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출되는 구조)
   */
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>{state.value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
    </div>
  );
}

function inputReducer(state, action) {
  return {
    ...state, // spread로 받음으로써, 코드를 짧고 깔끔하게 유지가능하다.
    [action.name]: action.value // state[e.target.name] = e.target.value 느낌
  };
}

export function HookReducerTwo() {
  /**
   * 1. state: 현재 가리키고 있는 상태 값
   * 2. dispatch: 액션을 발생시키는 함수 (함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출되는 구조)
   */
  const [state, dispatch] = useReducer(inputReducer, {
    name: "",
    nickname: ""
  });

  //
  const { name, nickname } = state;
  // event에 있는 target을 바로 뽑아서 넘겨준다.
  const handleChange = ({ target }) => dispatch(target);

  return (
    <>
      <div>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Name: {name}</p>
        <p>Nickname: {nickname}</p>
      </div>
    </>
  );
}
