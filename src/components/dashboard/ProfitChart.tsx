import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, Area, AreaChart, ReferenceDot } from "recharts";

const data = [
  { name: "Week 1", value: 0 },
  { name: "Week 2", value: 20 },
  { name: "Week 3", value: 45 },
  { name: "Week 4", value: 30 },
  { name: "Week 5", value: 70 },
  { name: "Week 6", value: 55 },
  { name: "Week 7", value: 85 },
];

export function ProfitChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-base md:text-lg font-semibold">Profit</CardTitle>
        <span className="text-xs md:text-sm text-muted-foreground">Last 30 Days</span>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-48 md:h-64">
          <AreaChart data={data} margin={{ top: 8, right: 20, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.7 0.25 180)" />
                <stop offset="25%" stopColor="oklch(0.7 0.25 200)" />
                <stop offset="50%" stopColor="oklch(0.6 0.2 270)" />
                <stop offset="100%" stopColor="oklch(0.7 0.3 320)" />
              </linearGradient>
              <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.6 0.2 180 / 0.5)" />
                <stop offset="25%" stopColor="oklch(0.6 0.2 200 / 0.4)" />
                <stop offset="50%" stopColor="oklch(0.6 0.2 270 / 0.3)" />
                <stop offset="100%" stopColor="oklch(0.6 0.2 320 / 0.1)" />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#waveGradient)"
              strokeWidth={4}
              fill="url(#fillGradient)"
              dot={false}
              activeDot={{ r: 7, fill: 'oklch(0.7 0.3 320)', stroke: 'oklch(0.7 0.3 320)' }}
              className="animate-fade-in-up"
            />
            <ReferenceDot x="Week 7" y={85} r={7} isFront fill="oklch(0.7 0.3 320)" stroke="oklch(0.7 0.3 320)" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}