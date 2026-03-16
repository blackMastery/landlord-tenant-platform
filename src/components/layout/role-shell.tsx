import { ReactNode } from "react";
import Link from "next/link";
import { managerProfile } from "@/lib/mock-data";
import { RoleNav } from "@/components/layout/role-nav";

export function RoleShell({
  activeRole,
  title,
  subtitle,
  mobileNavLinks,
  children,
}: {
  activeRole: string;
  title: string;
  subtitle: string;
  mobileNavLinks?: Array<{ label: string; href: string; active?: boolean }>;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fdf7e7,_#f7f1ff_45%,_#f5f7ff_100%)] text-foreground">
      <header className="border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-4 py-5 sm:flex-row sm:items-center sm:px-6 sm:py-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white sm:h-12 sm:w-12">
              LT
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Landlord Tenant Platform
              </p>
              <h1 className="text-xl font-semibold sm:text-2xl">{title}</h1>
              <p className="text-sm text-muted-foreground">
                {subtitle} - {managerProfile.portfolio}
              </p>
            </div>
          </div>
          <RoleNav active={activeRole} />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-28 pt-6 sm:px-6 sm:pb-16 sm:pt-10">
        {children}
      </main>

      {mobileNavLinks && mobileNavLinks.length > 0 && (
        <nav className="fixed bottom-4 left-1/2 z-50 flex w-[min(92vw,520px)] -translate-x-1/2 items-center justify-between gap-1 rounded-full border border-border/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur lg:hidden">
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${
                link.active
                  ? "bg-black text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
