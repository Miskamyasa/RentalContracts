import {TextField} from "@kobalte/core"


interface TextInputProps {
  name: string
  type: "text" | "email" | "password"
  label: string
  required?: boolean
  onChange?: (val: string) => void
}

const inputClass = ""
  + "border border-gray-300 inline-flex w-full rounded-md p-2 outline-none bg-white transition-colors "
  + "hover:border-gray-400 "
  + "outlined"

export default function TextInput(props: TextInputProps) {
  return (
    <TextField.Root
      class="flex flex-col gap-2"
      onValueChange={props.onChange}>
      <TextField.Label class="text-slate-600 text-sm font-medium select-none">
        {props.label}
      </TextField.Label>
      <TextField.Input
        class={inputClass}
        name={props.name}
        required={props.required}
        type={props.type} />
    </TextField.Root>
  )
}
