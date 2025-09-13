import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

const disputes = [
  { id: "ORD-9001", reseller: "Acme Corp", reason: "Wrong item delivered", evidence: "image.jpg" },
  { id: "ORD-9002", reseller: "Globex", reason: "Late delivery", evidence: "chat.txt" },
  { id: "ORD-9003", reseller: "Umbrella Ltd", reason: "Partial fulfillment", evidence: "proof.pdf" },
];

export default function Disputes() {
  
  const [query, setQuery] = useState("");
  const rows = useMemo(() => {
    const q = query.toLowerCase();
    return disputes.filter((d) => d.id.toLowerCase().includes(q) || d.reseller.toLowerCase().includes(q) || d.reason.toLowerCase().includes(q));
  }, [query]);
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <h2 className="text-xl font-semibold">Disputes Center</h2>
          <Input placeholder="Search disputes" className="w-60" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        <Card>
          <CardHeader className="pb-3"><CardTitle>Disputed Orders</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Reseller</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Evidence</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell className="font-medium">{d.id}</TableCell>
                      <TableCell>{d.reseller}</TableCell>
                      <TableCell>{d.reason}</TableCell>
                      <TableCell className="font-mono text-xs">{d.evidence}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button size="sm" variant="default">Fix</Button>
                          <Button size="sm" variant="secondary">Decline</Button>
                          <Button size="sm" variant="outline">Partial Refund</Button>
                        </div>
                      </TableCell>
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


