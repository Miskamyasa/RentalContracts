import {createRoot, createSignal} from "solid-js"


type LoaderState = Record<string, boolean>

const {signal: loaderSignal, setSignal} = createRoot(() => {
  const [signal, setSignal] = createSignal<LoaderState>({})
  return {signal, setSignal} as const
})

export {loaderSignal}

export function setLoading(key: string, value: boolean): void {
  setSignal((state: LoaderState): LoaderState => {
    return {
      ...state,
      [key]: value,
    }
  })
}
