import TextInput from "../forms/TextInput"


export default function LoginForm() {
  let ref: HTMLFormElement

  const onSubmit = (event: Event) => {
    event.preventDefault()
    console.warn(ref)
  }

  return (
    <form
      ref={el => (ref = el)}
      class="flex flex-col gap-4"
      onSubmit={onSubmit}>
      <TextInput
        label="Email"
        name="email"
        type="email" />
      <TextInput
        label={"Password"}
        name="password"
        type="password" />
      <button class="btn btn-primary">Login</button>
    </form>
  )
}
