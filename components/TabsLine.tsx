import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Tab = {
  value: string
  label: string
}

interface TabsLineProps {
  tabs: Tab[]
  className?: string
}

export default function TabsLine({ tabs }: TabsLineProps) {
  return (
    <Tabs defaultValue={tabs[0].value} className="top-4 left-4 absolute">
      <TabsList variant="line">
        {tabs.map((tab: any) => (
          <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
