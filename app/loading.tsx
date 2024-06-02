import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex flex-row min-h-[calc(100vh-120px)] items-center justify-center">
      <Spinner className="text-green-400" size="large"/>
    </main>
  )
}