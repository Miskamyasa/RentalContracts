import type {JSXElement} from "solid-js"

import {loaderSignal, setLoading} from "../../store/headerLoader"


export default function Button(): JSXElement {
  const handleClick = (): void => {
    setLoading("home", !loaderSignal().has("home"))
  }

  return (
    <button
      class={"inline-block px-6 py-3 font-bold text-center text-sm uppercase align-middle transition-all "
        + "text-white bg-slate-500 rounded-lg cursor-pointer leading-normal ease-in shadow-xs "
        + "hover:-translate-y-px hover:shadow-md "
        + "active:opacity-90"}
      type="button"
      onClick={handleClick}>
      Loading: {loaderSignal().has("home") ? "true" : "false"}
    </button>
  )
}
