import {TextField} from "@kobalte/core"


interface TextInputProps {
  name: string
  type: "text" | "email" | "password"
  label: string
}

const inputClass = ""
  + "border border-gray-300 inline-flex w-full rounded-md p-2 outline-none bg-white transition-colors "
  + "hover:border-gray-400 "
  + "focus-visible:outline-sky-600 "
  + "focus-visible:outline-offset-2 "

export default function TextInput(props: TextInputProps) {
  return (
    <TextField.Root class="flex flex-col gap-2">
      <TextField.Label class="text-sm font-medium select-none">
        {props.label}
      </TextField.Label>
      <TextField.Input
        class={inputClass}
        name={props.name}
        type={props.type} />
    </TextField.Root>
  )
}
