'use client'

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

const data = [
  { group: 'Share of general population', share: 5, fill: 'var(--chart-4)' },
  { group: 'Share of homeless population', share: 33, fill: 'var(--chart-1)' },
]

const config = {
  share: {
    label: 'Indigenous share',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export function HomelessnessChart() {
  return (
    <figure className="my-8 rounded-lg border border-border bg-card p-5 md:p-6">
      <figcaption className="mb-1 font-serif text-lg font-semibold text-card-foreground">
        Overrepresentation in homelessness
      </figcaption>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground text-pretty">
        Indigenous peoples are about 5% of Canada&apos;s population but roughly
        one-third of those experiencing homelessness — a more than six-fold
        overrepresentation.
      </p>
      <ChartContainer config={config} className="h-[300px] w-full">
        <BarChart
          accessibilityLayer
          data={data}
          margin={{ top: 28, left: 4, right: 4 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="group"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v}%`}
            domain={[0, 40]}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideIndicator />}
            formatter={(value) => [`${value}% of the group is Indigenous`]}
          />
          <Bar dataKey="share" radius={6} maxBarSize={140}>
            {data.map((entry) => (
              <Cell key={entry.group} fill={entry.fill} />
            ))}
            <LabelList
              dataKey="share"
              position="top"
              formatter={(v: number) => `${v}%`}
              className="fill-foreground text-sm font-semibold"
            />
          </Bar>
        </BarChart>
      </ChartContainer>
      <p className="mt-3 text-xs text-muted-foreground">
        Source: Statistics Canada; Everyone Counts 2024 (Point-in-Time Counts),
        Government of Canada.
      </p>
    </figure>
  )
}
