import {createSignal} from "solid-js"

import {Dialog, Tabs} from "@kobalte/core"
import {RiSystemCloseCircleLine, RiSystemLoginCircleLine} from "solid-icons/ri"

import LoginForm from "./LoginForm"


export default function Auth() {
  const [open, setOpen] = createSignal(true)

  return (
    <Dialog.Root
      isOpen={open()}
      onOpenChange={setOpen}>
      <Dialog.Trigger>
        <RiSystemLoginCircleLine size="24" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="overlay animate-overlayHide ui-expanded:animate-overlayShow" />
        <div class="overlay-positioner">
          <Dialog.Content class="overlay-content relative animate-contentHide ui-expanded:animate-contentShow w-80">
            <Dialog.CloseButton class="absolute right-1 top-1">
              <RiSystemCloseCircleLine size={24} />
            </Dialog.CloseButton>
            <Tabs.Root
              aria-label="Authorization forms (login / register)"
              class="mt-8">
              <Tabs.List class="relative flex items-center gap-3">
                <Tabs.Trigger
                  class="text-slate-500 p-2 px-6"
                  value="login">Login</Tabs.Trigger>
                <Tabs.Trigger
                  class="text-slate-500 p-2 px-6"
                  value="register">Register</Tabs.Trigger>
                <Tabs.Indicator
                  class="absolute bg-transparent rounded-md transition-all border-2 border-sky-600 h-full" />
              </Tabs.List>
              <div class="border-t mt-6">
                <Tabs.Content
                  class="my-4 lg:my-6"
                  value="login">
                  <LoginForm />
                </Tabs.Content>
                <Tabs.Content
                  class="my-4 lg:my-6"
                  value="register">
                  Register
                </Tabs.Content>
              </div>
            </Tabs.Root>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
