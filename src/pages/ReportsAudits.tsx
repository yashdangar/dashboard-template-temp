import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const staffKpi = [
  { name: "Ava", success: 98, aht: "4m 20s", break: "22m" },
  { name: "Noah", success: 95, aht: "5m 02s", break: "30m" },
  { name: "Liam", success: 92, aht: "5m 40s", break: "28m" },
];

const resellerKpi = [
  { reseller: "Acme Corp", orders: 420, success: 97 },
  { reseller: "Globex", orders: 210, success: 94 },
];

const logs = [
  { time: "2025-09-13 10:21", actor: "Ava", action: "Updated rate presets" },
  { time: "2025-09-13 09:58", actor: "System", action: "Auto-cancelled 3 orders SLA" },
];

export default function ReportsAudits() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Reporting & Audits</h2>
          <div className="flex gap-2">
            <Button variant="secondary">Export CSV</Button>
            <Button variant="outline">Export PDF</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3"><CardTitle>Staff KPIs</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Staff</TableHead>
                      <TableHead className="text-right">Success %</TableHead>
                      <TableHead className="text-right">AHT</TableHead>
                      <TableHead className="text-right">Break</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {staffKpi.map((r) => (
                      <TableRow key={r.name}>
                        <TableCell className="font-medium">{r.name}</TableCell>
                        <TableCell className="text-right">{r.success}%</TableCell>
                        <TableCell className="text-right">{r.aht}</TableCell>
                        <TableCell className="text-right">{r.break}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3"><CardTitle>Reseller KPIs</CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reseller</TableHead>
                      <TableHead className="text-right">Orders</TableHead>
                      <TableHead className="text-right">Success %</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {resellerKpi.map((r) => (
                      <TableRow key={r.reseller}>
                        <TableCell className="font-medium">{r.reseller}</TableCell>
                        <TableCell className="text-right">{r.orders}</TableCell>
                        <TableCell className="text-right">{r.success}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="pb-3"><CardTitle>Activity Logs</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Actor</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.map((l, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-mono text-xs">{l.time}</TableCell>
                      <TableCell>{l.actor}</TableCell>
                      <TableCell>{l.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}


