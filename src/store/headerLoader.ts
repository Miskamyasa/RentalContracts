import {createRoot, createSignal} from "solid-js"


const {signal: loaderSignal, setSignal} = createRoot(() => {
  const [signal, setSignal] = createSignal<Set<string>>(new Set())
  return {signal, setSignal} as const
})

export {loaderSignal}

export function setLoading(key: string, value: boolean) {
  setSignal(state => {
    if (value) {
      !state.has(key) && state.add(key)
    } else {
      state.has(key) && state.delete(key)
    }
    return new Set(state)
  })
}
