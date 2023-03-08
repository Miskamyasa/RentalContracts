import {createRoot, createSignal} from "solid-js"


type LoaderState = Set<string>

const {signal: loaderSignal, setSignal} = createRoot(() => {
  const [signal, setSignal] = createSignal<LoaderState>(new Set())
  return {signal, setSignal} as const
})

export {loaderSignal}

export function setLoading(key: string, value: boolean): void {
  setSignal((state: LoaderState): LoaderState => {
    if (value) {
      !state.has(key) && state.add(key)
    } else {
      state.has(key) && state.delete(key)
    }
    return new Set(state)
  })
}
