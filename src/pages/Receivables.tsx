import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

const receivables = [
  { reseller: "Acme Corp", balance: 1250.5, lastInvoice: "INV-1024" },
  { reseller: "Globex", balance: 890.0, lastInvoice: "INV-1023" },
  { reseller: "Umbrella Ltd", balance: 2210.0, lastInvoice: "INV-1022" },
];

const payments = [
  { id: "PMT-2041", reseller: "Acme Corp", amount: 400, date: "2025-09-10" },
  { id: "PMT-2040", reseller: "Globex", amount: 200, date: "2025-09-09" },
];

export default function Receivables() {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => {
    const q = query.toLowerCase();
    return receivables.filter((r) => r.reseller.toLowerCase().includes(q));
  }, [query]);
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <h2 className="text-xl font-semibold">Receivables & Payments</h2>
          <Input placeholder="Search reseller" className="w-60" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        <Card>
          <CardHeader className="pb-3"><CardTitle>Reseller Balances</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reseller</TableHead>
                    <TableHead>Last Invoice</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((r) => (
                    <TableRow key={r.reseller}>
                      <TableCell className="font-medium">{r.reseller}</TableCell>
                      <TableCell>{r.lastInvoice}</TableCell>
                      <TableCell className="text-right">${r.balance.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="secondary">Mark as Paid</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3"><CardTitle>Payment History</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Reseller</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.id}</TableCell>
                      <TableCell>{p.reseller}</TableCell>
                      <TableCell>{p.date}</TableCell>
                      <TableCell className="text-right">${p.amount.toFixed(2)}</TableCell>
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


