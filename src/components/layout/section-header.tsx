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
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {actions ? (
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          {actions}
        </div>
      ) : null}
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
      {secondary ? (
        <Button variant="outline" className="w-full sm:w-auto">
          {secondary}
        </Button>
      ) : null}
      <Button className="w-full sm:w-auto">{primary}</Button>
    </>
  );
}
