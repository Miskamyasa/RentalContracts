import {createSignal} from "solid-js"


type LoaderState = Record<string, boolean>

export const [loaderSignal, _setSignal] = createSignal<LoaderState>({})

export function setLoading(key: string, value: boolean): void {
  _setSignal((state: LoaderState): LoaderState => {
    return {
      ...state,
      [key]: value,
    }
  })
}
