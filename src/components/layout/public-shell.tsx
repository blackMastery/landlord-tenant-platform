import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function PublicShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
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
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link href="/">Back to Roles</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 sm:pt-10">
        {children}
      </main>
    </div>
  );
}
