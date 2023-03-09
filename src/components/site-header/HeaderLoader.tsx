import {Show} from "solid-js"

import {CgSpinnerTwo} from "solid-icons/cg"

import {loaderSignal} from "../../store/loading"


export default function HeaderLoader() {
  return (
    <Show when={loaderSignal().size > 0}>
      <CgSpinnerTwo
        class="animate-spin"
        size={23} />
    </Show>
  )
}
