import { Card } from "@/components/ui/card"

type AssistantSideCardProps = {
  title: string
  children: React.ReactNode
}

function AssistantSideCard({ title, children }: AssistantSideCardProps) {
  return (
    <Card className="flex-col gap-4">
      <h2 className="text-lg leading-none font-medium text-outline">
        {title}
      </h2>
      {children}
    </Card>
  )
}

export { AssistantSideCard }
