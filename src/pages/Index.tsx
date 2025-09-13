import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { ProfitChart } from "@/components/dashboard/ProfitChart";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { OrdersChart } from "@/components/dashboard/OrdersChart";
import { ActivityList } from "@/components/dashboard/ActivityList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Utensils, Film, ShoppingBag } from "lucide-react";

const Index = () => {
  const categoryMix = [
    { name: "Food", value: 58 },
    { name: "Movies", value: 24 },
    { name: "Groceries", value: 12 },
    { name: "Pharmacy", value: 6 },
  ];
  const colors = ["#6366F1", "#14B8A6", "#F59E0B", "#F43F5E"]; // indigo/teal/amber/rose
  
  // Chart config for legend
  const chartConfig = {
    Food: {
      label: "Food",
      color: "#6366F1",
    },
    Movies: {
      label: "Movies", 
      color: "#14B8A6",
    },
    Groceries: {
      label: "Groceries",
      color: "#F59E0B", 
    },
    Pharmacy: {
      label: "Pharmacy",
      color: "#F43F5E",
    },
  };
  const receivablesTop = [
    { reseller: "Acme Corp", balance: 1250.5 },
    { reseller: "Globex", balance: 890.0 },
    { reseller: "Umbrella Ltd", balance: 2210.0 },
  ];
  const disputesRecent = [
    { id: "ORD-9003", reason: "Partial fulfillment" },
    { id: "ORD-9002", reason: "Late delivery" },
    { id: "ORD-9001", reason: "Wrong item delivered" },
  ];
  const queueTop = [
    { category: "Food", depth: 42 },
    { category: "Movies", depth: 18 },
    { category: "Groceries", depth: 12 },
  ];
  const RADIAN = Math.PI / 180;
  const renderCategoryLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" style={{ fontSize: 12, fontWeight: 600 }}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <DashboardLayout>
        {/* Dashboard Content - Same for All Screen Sizes */}
        <div className="space-y-6">
          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <MetricCard title="Profit Latest Entry" value="$2,900" />
            <MetricCard title="Profit Last 7 Days" value="$12,450" />
            <MetricCard title="Total Revenue" value="$78,000" />
          </div>

          {/* Orders and Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Orders Section */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-lg md:text-xl font-semibold text-foreground">Orders</h2>
              <div className="space-y-3 md:space-y-4">
                <ServiceCard
                  name="iPhone 15 Pro"
                  icon={Utensils}
                  category="Electronics"
                  variant="chipotle"
                  action="Pick"
                />
                <ServiceCard
                  name="MacBook Air M3"
                  icon={Film}
                  category="Computers"
                  time="410 Min"
                  variant="movies"
                  action="Pick"
                />
                <ServiceCard
                  name="Nike Air Max"
                  icon={ShoppingBag}
                  category="Footwear"
                  time="2 hrs"
                  variant="others"
                  action="Pick"
                />
              </div>
            </div>

            {/* Charts Section */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <ProfitChart />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RevenueChart />
                <OrdersChart />
              </div>
            </div>
          </div>

          {/* Snapshots Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card>
              <CardHeader className="pb-3"><CardTitle>Category Mix</CardTitle></CardHeader>
              <CardContent>
                <div className="h-56">
                  <ChartContainer config={chartConfig}>
                    <PieChart>
                      <Pie data={categoryMix} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} labelLine={false} label={renderCategoryLabel}>
                        {categoryMix.map((_, idx) => (
                          <Cell key={idx} fill={colors[idx % colors.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <ChartLegend content={<ChartLegendContent />} />
                    </PieChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3"><CardTitle>Receivables Snapshot</CardTitle></CardHeader>
              <CardContent>
                <div className="overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Reseller</TableHead>
                        <TableHead className="text-right">Balance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {receivablesTop.map((r) => (
                        <TableRow key={r.reseller}>
                          <TableCell className="font-medium">{r.reseller}</TableCell>
                          <TableCell className="text-right">${r.balance.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3"><CardTitle>Queue Snapshot</CardTitle></CardHeader>
              <CardContent>
                <div className="overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Depth</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {queueTop.map((q) => (
                        <TableRow key={q.category}>
                          <TableCell className="font-medium">{q.category}</TableCell>
                          <TableCell className="text-right">{q.depth}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Section */}
          <ActivityList />
        </div>
    </DashboardLayout>
  );
};

export default Index;
