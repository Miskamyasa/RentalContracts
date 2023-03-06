import {createSignal, JSXElement} from "solid-js"

import {CgSpinnerTwo} from "solid-icons/cg"


type LoaderState = Record<string, boolean>

export const [loaderSignal, setSignal] = createSignal<LoaderState>({})

export function setLoading(key: string, value: boolean): void {
  setSignal((state: LoaderState): LoaderState => {
    return {
      ...state,
      [key]: value,
    }
  })
}

export default function HeaderLoader(): JSXElement {
  return (
    <div>
      {Object.values(loaderSignal()).some(Boolean) && (
        <CgSpinnerTwo
          class="animate-spin"
          size={23} />
      )}
    </div>
  )
}
