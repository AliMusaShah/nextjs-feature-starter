import type { ChartColor } from "../types/analytics-types"

export const chartColorClasses: Record<
  ChartColor,
  { stroke: string; background: string }
> = {
  green: { stroke: "stroke-chart-green", background: "bg-chart-green" },
  mint: { stroke: "stroke-primary-container", background: "bg-primary-container" },
  sky: { stroke: "stroke-tertiary-fixed", background: "bg-tertiary-fixed" },
  orange: { stroke: "stroke-chart-orange", background: "bg-chart-orange" },
  red: { stroke: "stroke-chart-red", background: "bg-chart-red" },
  lime: { stroke: "stroke-chart-lime", background: "bg-chart-lime" },
}
