import {JSXElement, Show} from "solid-js"

import {CgSpinnerTwo} from "solid-icons/cg"

import {loaderSignal} from "../../store/headerLoader"


export default function HeaderLoader(): JSXElement {
  return (
    <Show when={loaderSignal().size > 0}>
      <CgSpinnerTwo
        class="animate-spin"
        size={23} />
    </Show>
  )
}
