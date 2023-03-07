import type {JSXElement} from "solid-js"

import {CgSpinnerTwo} from "solid-icons/cg"

import {loaderSignal} from "../../store/headerLoader"


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
