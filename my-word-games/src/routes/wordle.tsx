import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wordle')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/wordle"!</div>
}
