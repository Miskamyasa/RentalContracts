import {createEffect, createSignal} from "solid-js"

import {Dialog, Tabs} from "@kobalte/core"
import {RiSystemCloseCircleLine, RiSystemLoginCircleLine, RiSystemLogoutCircleLine} from "solid-icons/ri"

import {getAuthState} from "../../pocketbase/pocketbase"
import {isAuth, setIsAuth} from "../../store/auth"

import LoginForm from "./LoginForm"


export default function Auth() {
  const [open, setOpen] = createSignal(false)

  createEffect(() => {
    const authState = getAuthState()
    if (authState.token && !isAuth()) {
      setIsAuth(true)
    }
  })

  function dismiss() {
    setOpen(false)
  }

  return (
    <Dialog.Root
      isOpen={open()}
      onOpenChange={setOpen}>
      <Dialog.Trigger>
        {isAuth() ? <RiSystemLogoutCircleLine size="24" /> : <RiSystemLoginCircleLine size="24" />}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="overlay animate-overlayHide ui-expanded:animate-overlayShow" />
        <div class="overlay-positioner">
          <Dialog.Content class="overlay-content relative animate-contentHide ui-expanded:animate-contentShow w-80">
            <Dialog.CloseButton class="absolute right-1 top-1 outlined rounded-sm">
              <RiSystemCloseCircleLine size={24} />
            </Dialog.CloseButton>
            <Tabs.Root
              aria-label="Authorization forms (login / register)"
              class="mt-8">
              <Tabs.List class="relative flex items-center gap-3 text-slate-600">
                <Tabs.Trigger
                  class="p-2 px-6 outlined rounded-md"
                  value="login">Login</Tabs.Trigger>
                <Tabs.Trigger
                  class="p-2 px-6 outlined rounded-md"
                  value="register">Register</Tabs.Trigger>
                <Tabs.Indicator
                  class="absolute bg-transparent transition-all border-2 rounded-md border-sky-600 h-full" />
              </Tabs.List>
              <div class="border-t mt-6">
                <Tabs.Content
                  class="my-4 lg:my-6"
                  value="login">
                  <LoginForm dismiss={dismiss} />
                </Tabs.Content>
                <Tabs.Content
                  class="my-4 lg:my-6"
                  value="register">
                  Not ready yet
                </Tabs.Content>
              </div>
            </Tabs.Root>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
