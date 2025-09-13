import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";

const staff = [
  { name: "Ava Johnson", status: "Online", breakTimer: "—", activeOrders: 3 },
  { name: "Noah Smith", status: "Paused", breakTimer: "07:12", activeOrders: 1 },
  { name: "Liam Brown", status: "Offline", breakTimer: "—", activeOrders: 0 },
  { name: "Emma Davis", status: "Online", breakTimer: "—", activeOrders: 2 },
];

const statusColor = (s: string) => s === "Online" ? "bg-emerald-500" : s === "Paused" ? "bg-amber-500" : "bg-rose-500";

export default function StaffOps() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [sortKey, setSortKey] = useState<"name" | "status" | "activeOrders">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const rows = staff.filter((s) =>
      (status === "all" || s.status.toLowerCase() === status) &&
      (s.name.toLowerCase().includes(q))
    );
    const sorted = [...rows].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "activeOrders") cmp = a.activeOrders - b.activeOrders;
      else cmp = String(a[sortKey]).localeCompare(String(b[sortKey]));
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [query, status, sortKey, sortDir]);

  const toggleSort = (key: typeof sortKey) => {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <h2 className="text-xl font-semibold">Staff Live Ops</h2>
          <div className="flex gap-2">
            <Input placeholder="Search staff" className="w-48" value={query} onChange={(e) => setQuery(e.target.value)} />
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Team Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="cursor-pointer select-none" onClick={() => toggleSort("name")}>Name</TableHead>
                    <TableHead className="cursor-pointer select-none" onClick={() => toggleSort("status")}>Status</TableHead>
                    <TableHead>Break Timer</TableHead>
                    <TableHead className="text-right cursor-pointer select-none" onClick={() => toggleSort("activeOrders")}>Active Orders</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((s) => (
                    <TableRow key={s.name}>
                      <TableCell className="font-medium">{s.name}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center gap-2`}>
                          <span className={`h-2 w-2 rounded-full ${statusColor(s.status)}`}></span>
                          <Badge variant="secondary">{s.status}</Badge>
                        </span>
                      </TableCell>
                      <TableCell>{s.breakTimer}</TableCell>
                      <TableCell className="text-right">{s.activeOrders}</TableCell>
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


