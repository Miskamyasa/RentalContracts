import {createRoot, createSignal} from "solid-js"


const {signal: isAuth, setSignal} = createRoot(() => {
  const [signal, setSignal] = createSignal<boolean>(false)
  return {signal, setSignal} as const
})

export {isAuth}

export function setIsAuth(value: boolean) {
  setSignal(value)
}
