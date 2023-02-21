import {createSignal, JSXElement, ParentProps} from "solid-js"
import "./Counter.css"


const Counter = (props: ParentProps): JSXElement => {
  const [count, setCount] = createSignal(0);
  const add = (): number => setCount(count() + 1)
  const subtract = (): number => setCount(count() - 1)

  return (
    <>
      <div class="unknown" id={"2"} />
      <div class="counter" id="1">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{props.children}</div>
    </>
  )
}

export default Counter
