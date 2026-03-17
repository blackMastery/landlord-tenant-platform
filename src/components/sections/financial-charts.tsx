"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type MonthlyFinancial = {
  month: string;
  income: number;
  expenses: number;
};

export function FinancialCharts({ data }: { data: MonthlyFinancial[] }) {
  const maxVal = Math.max(...data.map((d) => d.income));
  const latestMonth = data[data.length - 1];
  const noi = latestMonth.income - latestMonth.expenses;
  const noiPct = ((noi / latestMonth.income) * 100).toFixed(1);

  return (
    <div className="space-y-4">
      {/* KPI row */}
      <div className="grid gap-3 sm:grid-cols-3">
        <Card className="bg-white/90">
          <CardContent className="pt-5">
            <p className="text-xs text-muted-foreground">Gross Revenue (Mar)</p>
            <p className="text-2xl font-semibold mt-1">${latestMonth.income.toLocaleString()}</p>
            <p className="text-xs text-emerald-600 mt-0.5">+1.2% vs last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white/90">
          <CardContent className="pt-5">
            <p className="text-xs text-muted-foreground">Total Expenses (Mar)</p>
            <p className="text-2xl font-semibold mt-1">${latestMonth.expenses.toLocaleString()}</p>
            <p className="text-xs text-emerald-600 mt-0.5">-18.3% vs last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white/90">
          <CardContent className="pt-5">
            <p className="text-xs text-muted-foreground">Net Operating Income</p>
            <p className="text-2xl font-semibold mt-1">${noi.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{noiPct}% margin</p>
          </CardContent>
        </Card>
      </div>

      {/* Bar chart */}
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Revenue vs. Expenses</CardTitle>
          <CardDescription>Monthly portfolio performance — last 7 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2 sm:gap-4" style={{ height: "180px" }}>
            {data.map((d) => (
              <div key={d.month} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <div className="w-full flex gap-0.5 items-end" style={{ height: "160px" }}>
                  <div
                    className="flex-1 bg-emerald-400 rounded-t-sm transition-all"
                    style={{ height: `${(d.income / maxVal) * 100}%` }}
                    title={`Income: $${d.income.toLocaleString()}`}
                  />
                  <div
                    className="flex-1 bg-rose-300 rounded-t-sm transition-all"
                    style={{ height: `${(d.expenses / maxVal) * 100}%` }}
                    title={`Expenses: $${d.expenses.toLocaleString()}`}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{d.month}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-5 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 bg-emerald-400 rounded-sm" />
              Revenue
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 bg-rose-300 rounded-sm" />
              Expenses
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Per-property NOI */}
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Per-Property NOI</CardTitle>
          <CardDescription>Net operating income breakdown — March</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { property: "Eden Court", income: 51200, expenses: 8200 },
            { property: "Harborline Flats", income: 44600, expenses: 9800 },
            { property: "Stillwater Lofts", income: 88520, expenses: 13580 },
          ].map((row) => {
            const net = row.income - row.expenses;
            const pct = Math.round((net / row.income) * 100);
            return (
              <div key={row.property} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{row.property}</span>
                  <span className="text-emerald-700 font-medium">${net.toLocaleString()} NOI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-10 text-right">{pct}%</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  ${row.income.toLocaleString()} revenue · ${row.expenses.toLocaleString()} expenses
                </p>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
