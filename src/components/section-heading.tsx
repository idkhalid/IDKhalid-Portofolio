import { Reveal } from "./reveal";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-12 md:mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted mb-3">
          {number} / {title}
        </p>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted max-w-xl">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
