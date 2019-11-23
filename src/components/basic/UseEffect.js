import React, { useState, useEffect } from "react";

function HookEffect({ initialValue }) {
  const [value, setValue] = useState(initialValue);
  /**
   * useEffect: class's Component의 componentDidMount, componentDidUpdate의 역할을 합친 형태
   * 기본형태
   * @param {effect} effect: Imperative function that can return a cleanup function:
   * @param {deps} deps: If present, effect will only activate if the values in the list change.
   */

  // useEffect(() => {
  //   console.log("Complete rendering!");
  //   console.log({ value });
  // });

  /**
   * 1. 마운트될 때만 실행하고 싶을 때, 2번째 파라미터(deps)에 [] 넘겨주기 (ComponentDidMount)
   */
  // useEffect(() => {
  //   console.log("Only Mounted!");
  // }, []);

  /**
   * ClassType
   */
  // componentDidMount() {
  //   console.log("Only Mounted!");
  // }

  /**
   * 2. 특정 값이 업데이트될 때만 실행하고 싶을 때, 2번째 파라미터(deps)에 [state] 넘겨주기 (ComponentDiUpdate)
   */
  // useEffect(() => {
  //   console.log("DidUpdate!", value);
  // }, [value]);

  /**
   * ClassType
   */
  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.value !== this.props.value) {
  //     console.log('DidUpdate!', this.props.value)
  //   }
  // }

  /**
   * 3. 뒷정리하기: useEffect는 렌더링 직후마다 실행되며, deps 파라미터에 무엇을 넣는지에 따라 조건이 변경됨.
   * unMount || didUpdate 직전에 작업을 수행하려면 뒷정리(cleanup)함수를 반환해 주어야한다.
   * unMount될때만 사용하려면, deps에 [] 넣어주기
   */
  useEffect(() => {
    console.log("effect!", value);
    return () => {
      console.log("cleanUp");
      setValue("CleanUp");
    };
  }, [value]);

  const handleChange = ({ target }) => {
    const { value } = target;
    if (value.length < 10) setValue(value);
  };

  return <input type="text" onChange={handleChange} value={value} />;
}

export default HookEffect;
