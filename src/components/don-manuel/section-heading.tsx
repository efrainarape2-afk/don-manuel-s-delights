import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between",
        align === "center" && "items-center text-center md:flex-col md:items-center",
      )}
    >
      <div className={cn("max-w-2xl space-y-3", align === "center" && "mx-auto") }>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 className="font-display text-balance text-3xl md:text-5xl">{title}</h2>
        {description ? <p className="text-base leading-7 text-muted-foreground md:text-lg">{description}</p> : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
