import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 190 },
  { name: "Mar", value: 300 },
  { name: "Apr", value: 250 },
  { name: "May", value: 400 },
  { name: "Jun", value: 350 },
];

export function RevenueChart() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base md:text-lg font-semibold">Revenue</CardTitle>
        <span className="text-xs md:text-sm text-muted-foreground">Monthly Overview</span>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="h-32 md:h-40">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="value"
              fill="hsl(var(--accent))"
              radius={[2, 2, 0, 0]}
              className="animate-fade-in-up"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}