import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <div className="mx-auto flex w-full max-w-xl items-center justify-between px-5 py-5 lg:px-0">
      <span>empresa.dev</span> <ModeToggle />
    </div>
  )
}
