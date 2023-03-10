import {createSignal} from "solid-js"

import {Button, Alert} from "@kobalte/core"

import {authWithPassword} from "../../pocketbase/pocketbase"
import {setIsAuth} from "../../store/auth"
import TextInput from "../forms/TextInput"


interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
}

interface Props {
  dismiss: () => void
}

export default function LoginForm(props: Props) {
  const [error, setError] = createSignal<string>("")

  let ref: HTMLFormElement

  async function handleSubmit(ref: HTMLFormElement) {
    const {email, password} = ref.elements as FormElements
    try {
      const auth = await authWithPassword(email.value, password.value)
      if (auth.token) {
        setIsAuth(true)
        props.dismiss()
      }
    } catch (error) {
      setError((error as Error).message)
    }
  }

  function onSubmit(event: SubmitEvent) {
    event.preventDefault()
    void handleSubmit(ref)
  }

  return (
    <form
      ref={el => (ref = el)}
      class="flex flex-col gap-4"
      onSubmit={onSubmit}>
      <TextInput
        required
        label="Email"
        name="email"
        type="email"
        onChange={() => setError("")} />
      <TextInput
        required
        label={"Password"}
        name="password"
        type="password"
        onChange={() => setError("")} />
      <Button.Root
        class="btn mt-4"
        type="submit">
        Login
      </Button.Root>
      {error() && (
        <Alert.Root class="bg-red-400 text-red-50 p-4 rounded-md">{error()}</Alert.Root>
      )}
    </form>
  )
}
