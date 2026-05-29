import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  icon?: ReactNode;
}

export default function SectionHeading({ title, icon }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {icon}

      <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
    </div>
  );
}
