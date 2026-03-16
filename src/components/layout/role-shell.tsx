import { ReactNode } from "react";
import { managerProfile } from "@/lib/mock-data";
import { RoleNav } from "@/components/layout/role-nav";

export function RoleShell({
  activeRole,
  title,
  subtitle,
  children,
}: {
  activeRole: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fdf7e7,_#f7f1ff_45%,_#f5f7ff_100%)] text-foreground">
      <header className="border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              LT
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Landlord Tenant Platform
              </p>
              <h1 className="text-2xl font-semibold">{title}</h1>
              <p className="text-sm text-muted-foreground">
                {subtitle} - {managerProfile.portfolio}
              </p>
            </div>
          </div>
          <RoleNav active={activeRole} />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-16 pt-10">
        {children}
      </main>

      <nav className="sticky bottom-4 mx-auto flex w-[min(90vw,520px)] items-center justify-between gap-1 rounded-full border border-border/70 bg-white/90 px-4 py-3 shadow-lg">
        {"Dashboard Properties Payments Maintenance Messages".split(" ").map(
          (label) => (
            <span
              key={label}
              className="rounded-full px-3 py-1 text-xs text-muted-foreground"
            >
              {label}
            </span>
          )
        )}
      </nav>
    </div>
  );
}
