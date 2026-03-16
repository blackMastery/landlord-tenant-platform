import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function SectionHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {actions ? <div className="flex gap-2">{actions}</div> : null}
    </div>
  );
}

export function SectionActions({
  primary,
  secondary,
}: {
  primary: string;
  secondary?: string;
}) {
  return (
    <>
      {secondary ? <Button variant="outline">{secondary}</Button> : null}
      <Button>{primary}</Button>
    </>
  );
}
