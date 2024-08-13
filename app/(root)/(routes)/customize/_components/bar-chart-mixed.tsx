'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
const chartData = [
  { browser: 'Banana', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'Banana Tree', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'das', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'dsa', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'otdsaher', visitors: 90, fill: 'var(--color-other)' }
]

const chartConfig = {
  visitors: {
    label: 'Searches/Month '
  },
  chrome: {
    label: 'Banana',
    color: 'hsl(var(--chart-1))'
  },
  safari: {
    label: 'Banana Tree',
    color: 'hsl(var(--chart-2))'
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))'
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))'
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig

export function BarChartMixed() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-[200px]">
      <BarChart
        accessibilityLayer
        data={chartData}
        layout="vertical"
        margin={{
          left: 0
        }}
      >
        <YAxis
          dataKey="browser"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            chartConfig[value as keyof typeof chartConfig]?.label
          }
        />
        <XAxis dataKey="visitors" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="visitors" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  )
}
